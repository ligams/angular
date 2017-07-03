import { browser, by, element } from 'protractor';

export class TpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('imdb-root h1')).getText();
  }
}
