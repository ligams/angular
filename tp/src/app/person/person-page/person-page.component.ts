import {Component, OnInit} from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../../movie/movie';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'imdb-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.css']
})
export class PersonPageComponent implements OnInit {
  private person:Person;
  private movies:Movie[];

  private id:number;

  constructor(private route:ActivatedRoute, private personService:PersonService, private titleService:Title) { }

  ngOnInit() {
    this.route.params
      .subscribe((params:Params):any => {
        this.id = params.id
      });
    Observable.zip(this.personService.person(this.id), this.personService.movies(this.id))
      .subscribe((arr:Array<any>) => {
        this.person = arr[0];
        this.movies = arr[1];
        this.titleService.setTitle(this.person.name);
      });
  }

}
