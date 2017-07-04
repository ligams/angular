import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {ActivatedRoute, Params} from '@angular/router';
import {MovieService} from '../movie.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/zip';

@Component({
  selector: 'imdb-movie-credits',
  templateUrl: './movie-credits.component.html',
  styleUrls: ['./movie-credits.component.css']
})
export class MovieCreditsComponent implements OnInit {

  public movie:Movie;

  public credits:any;
  private id:number;
  constructor(private route:ActivatedRoute, private movieService:MovieService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params:Params):any => {
        this.id = params.id
      });
      Observable.zip(this.loadMovie(), this.loadCredits())
        .subscribe(() =>
          console.log('loaded')
      );

  }

  private loadMovie():Observable<any>{
    return this.movieService.movie(this.id)
      .map((movie:any) => {
        this.movie = movie
      } );
  }
  private loadCredits():Observable<any>{
    return this.movieService.credits(this.id)
      .map((credits:any) => {
        this.credits = credits
      } );
  }

}
