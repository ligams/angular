import {Component, NgZone, OnInit} from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import {MdInputModule, MdInputContainer, MdOption} from '@angular/material';
import {Movie} from '../../movie/movie';
import {SearchService} from '../../movie/search.service';
import {Router} from '@angular/router';
import {EventManagerService, IEventListenr} from '../../eventmanager.service';

@Component({
  selector: 'imdb-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit, IEventListenr {


  private searchText: FormControl = new FormControl();
  private searchButton: FormControl = new FormControl();
  private movies: Movie[];
  private num:number = 0;

  constructor(private searchService: SearchService, private router: Router, private eventManager:EventManagerService) {}

  ngOnInit() {
    this.eventManager.registerEvent("HBC",this, () => {
      this.num++;

    });
    this.searchText.valueChanges
      .debounceTime(200)
      .subscribe(() => {
        this.searchService.search(this.searchText.value)
          .subscribe((arr: Movie[]) => {
            if (arr) {
              console.log(arr);
              this.movies = arr;
            } else {
              this.movies = [];
            }

          });
      });

  }
  public search():void{
    this.eventManager.emit("SEARCH_START");
    let that = this;
       setTimeout(function() {
         that.searchService.search(that.searchText.value)

           .subscribe((arr: Movie[]) => {
             if (arr) {
               that.eventManager.emit("SEARCH_COMPLETE", arr);
             } else {
             }

           });
       },1000);
  }

  public onkeyup(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 40:
        break;
      case 38:
        break;
      case 13:
        break;
      default:
        this.searchService.search(this.searchText.value)
          .subscribe((arr: Movie[]) => {
            if (arr) {
              console.log(arr);
              this.movies = arr;
            } else {
              this.movies = [];
            }
            // this.zone.run(() => console.log('repaint'));
          });

    }
  }

  public select(event: any, selector:MdOption): void {
    this.router.navigateByUrl('/movie/'+selector.value);


  }

  ngOnDestroy(): void {
    this.eventManager.unregisterEvent("HBC", this);
  }

}
