import {Component, Inject, OnInit} from '@angular/core';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';
import {Movie} from '../../movie/movie';


@Component({
  selector: 'dial',
  template: `    
    {{movie.overview}}
    
    <button md-raised-button (click)="dialogRef.close()">Fermer</button>`
})
export class DialogComponent implements OnInit{

  public movie:Movie;
  public overview:string;
  constructor(@Inject(MD_DIALOG_DATA) public data: any, public dialogRef: MdDialogRef<any>) {


  }
  ngOnInit(): void {
    if(this.data.movie){
      this.movie = this.data.movie;
    }
  }
}
