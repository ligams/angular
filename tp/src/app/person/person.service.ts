import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Person} from './person';
import {plainToClass} from 'class-transformer';
import {Movie} from '../movie/movie';

@Injectable()
export class PersonService {

  constructor(private http: Http) { }

  public person(id:number): Observable<Person[]>{
    return this.http.get(`api/person/${id}`)
      .map((res:Response) => res.json())
      .map(json => plainToClass(Person, json));
  }

  public movies(id:number): Observable<Movie[]>{
    return this.http.get(`api/discover/movie?with_cast=${id}`)
      .map((res:Response) => res.json().results)
      .map(json => plainToClass(Movie, json));
  }
}
