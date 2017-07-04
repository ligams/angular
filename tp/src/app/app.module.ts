import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { PopularPageComponent } from './movie/popular-page/popular-page.component';
import { MovieService } from './movie/movie.service';
import { MoviePosterComponent } from './movie/movie-poster/movie-poster.component';
import {RouterModule} from '@angular/router';
import { MoviePageComponent } from './movie/movie-page/movie-page.component';
import { MovieDetailComponent } from './movie/movie-detail/movie-detail.component';
import { MovieCreditsComponent } from './movie/movie-credits/movie-credits.component';
import { PersonComponent } from './person/person/person.component';
import { PersonPageComponent } from './person/person-page/person-page.component';
import {PersonService} from './person/person.service';
import { PersonDetailComponent } from './person/person-detail/person-detail.component';
import { ScrollComponent } from './common/scroll/scroll.component';

const appRoutes = [
  {
    path: 'movie',
    children: [
      {
        path: 'popular',
        component: PopularPageComponent
      },
      {
        path: ':id',
        children: [
          {
            path: '',
            component: MoviePageComponent,
          },
          {
            path:'credits',
            component: MovieCreditsComponent
          }
        ]
      }
    ]
  },
  {
    path: 'person',
    children: [
      {
        path: ':id',
        component: PersonPageComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'movie/popular',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PopularPageComponent,
    MoviePosterComponent,
    MoviePageComponent,
    MovieDetailComponent,
    MovieCreditsComponent,
    PersonComponent,
    PersonPageComponent,
    PersonDetailComponent,
    ScrollComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
