const path = require('path');
const http = require('http');
const url = require("url");
const request = require('request');
const prompt = require('prompt');
const querystring = require('querystring');

const cacheDirectory = 'cache';
console.log(`Cached data in ${path.resolve(cacheDirectory)}`);

const API_URL = 'http://api.themoviedb.org/3';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';

let apiKey = process.argv[2];


let jsonServer = require('json-server');
let server = jsonServer.create();
let router = jsonServer.router({
    comments: []
});

const start = () => {
    // Default cache duration of 24h
    let cacheDuration = 24 * 60 * 60 * 1000;
    if (!apiKey) {
        console.warn('No API Key provided. Only cached result can be used!');
        // Extend cache duration to 5 years
        cacheDuration = 5 * 365 * 24 * 60 * 60 * 1000;
    }

    const authentifiedRequest = function () {
        arguments[0].qs = {api_key: apiKey};
        return request.apply(this, arguments);
    };

    const cachedRequest = require('cached-request')(authentifiedRequest);

    cachedRequest.setCacheDirectory(cacheDirectory);
    cachedRequest.setValue('ttl', cacheDuration);

    const port = 1337;
    server.use(function (req, res, next) {
        let requestUrl = req.url;
        let imdbUrl;
        let urlObject = url.parse(requestUrl);
        if (/\/comments/.exec(requestUrl)) {
            next();
        } else if (/\/favicon\.ico/.exec(requestUrl)) {
            console.log('Favicon');
            res.end();
            return;
        } else if (/.*\.jpg/.exec(requestUrl)) {
            imdbUrl = IMAGE_URL + urlObject.pathname;
        } else {
            let qs = querystring.parse(urlObject.query);
            qs.language = 'fr-FR';
            imdbUrl = API_URL + urlObject.pathname + '?' + querystring.stringify(qs);
            console.log(imdbUrl);
        }
        if (imdbUrl) {
            req.pipe(cachedRequest({url: imdbUrl})).pipe(res);
        }

    });
    server.use(router);
    server.listen(port, () => console.log(`Listening on http://localhost:${port}`));
};

if (!apiKey) {
    prompt.start();
    prompt.get([
        {
            name: 'apiKey',
            description: 'Provide a https://www.themoviedb.org API key (if not, only cached results will be available)'
        }
    ], (err, config) => {
        apiKey = config.apiKey;
        start();
    });
} else {
    start();
}





