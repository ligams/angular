import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'imdb-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit {
  public movies: Array<Movie>;
  constructor(private movieService:MovieService) { }

  ngOnInit() {
    this.movieService.popular()
      .subscribe((movies: Array<Movie>) => {
        this.movies = movies;
        console.log(this.movies);
      });
    /*this.movies = [
      <Movie> {id:1, title: "One"},
      <Movie> {id:2, title: "Two"},
      <Movie> {id:3, title: "Three"}
    ];*/
  }

}
