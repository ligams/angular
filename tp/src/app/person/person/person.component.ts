import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';
import {PersonService} from '../person.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'imdb-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  @Input()
  public person:Person;
  private id:number;

  constructor() { }

  ngOnInit() {

  }

}
