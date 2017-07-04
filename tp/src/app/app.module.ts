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

const appRoutes = [
  {
    path: 'movie',
    children: [
      {path: 'popular', component: PopularPageComponent},
      {path: ':id', component: MoviePageComponent}
    ]
  },
  {
    path: 'person',
    children: [

    ]
  },
  {path: '**', redirectTo: 'movie/popular', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    PopularPageComponent,
    MoviePosterComponent,
    MoviePageComponent,
    MovieDetailComponent,
    MovieCreditsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
