import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'imdb-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  @Input()
  public movie:Movie;

  constructor() { }

  ngOnInit() {
  }

}
