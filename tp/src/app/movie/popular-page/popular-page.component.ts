import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {EventManagerService, IEventListenr} from '../../eventmanager.service';

@Component({
  selector: 'imdb-popular-page',
  templateUrl: './popular-page.component.html',
  styleUrls: ['./popular-page.component.css']
})
export class PopularPageComponent implements OnInit, IEventListenr {

  public movies: Array<Movie>;

  public static instance:PopularPageComponent;
  constructor(private movieService:MovieService, private eventManager:EventManagerService) { }

  ngOnInit() {
    PopularPageComponent.instance = this;
    this.movieService.popular()
      .subscribe((movies: Array<Movie>) => {
        this.movies = movies;
      });
    this.eventManager.registerEvent("SEARCH_COMPLETE", this, (a) => this.onSearchComplete(a) );
    this.eventManager.registerEvent("SEARCH_START", this, this.onSearchStart);
    /*this.movies = [
      <Movie> {id:1, title: "One"},
      <Movie> {id:2, title: "Two"},
      <Movie> {id:3, title: "Three"}
    ];*/
  }
  private onSearchComplete(arr:any):void{
    this.movies = arr[0];
  }

  private onSearchStart(){
    PopularPageComponent.instance.movies = [];
  }
  ngOnDestroy(): void {
    this.eventManager.unregisterEvent("SEARCH_COMPLETE", this);
  }

}
