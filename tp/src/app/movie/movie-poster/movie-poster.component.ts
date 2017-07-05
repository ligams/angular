import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {MdDialog, MdDialogConfig, MdDialogModule, MdDialogRef} from '@angular/material';
import {MovieDetailComponent} from '../movie-detail/movie-detail.component';
import {DialogComponent} from '../../common/dialog/dialog.component';
import {EventManagerService} from '../../eventmanager.service';



@Component({
  selector: 'imdb-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css'],
  entryComponents: [
    DialogComponent
  ],
})
export class MoviePosterComponent implements OnInit {
  @Input()
  public movie:Movie;

  dialogRef: MdDialogRef<DialogComponent>;
  constructor(public dialog: MdDialog, private eventManager:EventManagerService){}
  ngOnInit() {

  }

  public posterUrl():string{
    return '/api/'+this.movie.poster_path;
  }

  public showDetail(movie:Movie){
    this.eventManager.emit("HBC");
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        movie: this.movie
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

}
