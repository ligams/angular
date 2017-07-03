import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';
import {plainToClass} from 'class-transformer';

@Injectable()
export class MovieService {

  constructor(private http: Http) {
  }

  public popular(): Observable<Array<Movie>> {
    return this.http.get(`api/movie/popular`)
      .map((res: Response) => res.json().results)
      //.do(json => console.log(json))
      .map(json => plainToClass(Movie, json))
     // .do(movies => console.log(movies));
  }
}
