import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'imdb-scroll',
  template: `
    <div class="scroll">
        <ng-content></ng-content>
    </div>
  `,
  styleUrls: ['./scroll.component.css']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
