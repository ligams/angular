import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Movie} from './movie';
import {plainToClass} from 'class-transformer';

@Injectable()
export class SearchService {

  constructor(private http: Http) {
  }

  public search(text:string): Observable<Array<Movie>> {
    return this.http.get(`api/search/multi?query=${text}`)
      .map((res: Response) => res.json().results)
      .map(json => plainToClass(Movie, json))
  }

}
