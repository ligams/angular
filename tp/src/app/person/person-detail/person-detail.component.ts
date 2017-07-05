import {Component, Input, OnInit} from '@angular/core';
import {Person} from '../person';
import {Movie} from '../../movie/movie';

@Component({
  selector: 'imdb-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
  @Input()
  private person:Person;
  @Input()
  private movies:Movie[];

  constructor() { }

  ngOnInit() {
  }

}
