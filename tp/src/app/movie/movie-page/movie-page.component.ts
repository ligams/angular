import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {ActivatedRoute, Params} from '@angular/router';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'imdb-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.css']
})
export class MoviePageComponent implements OnInit {
  private movie:Movie;
  private id:number;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params:Params):any => {
      this.id = params.id
    });

    this.movieService.movie(this.id)
      .subscribe((movie:any) => {
        this.movie = movie
    } );
  }

}
