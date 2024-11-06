import { Routes } from '@angular/router';
import { TvshowsComponent } from './shared/components/tvshows/tvshows.component';
import { MoviesComponent } from './shared/components/movies/movies.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App TV Shows',
        component: TvshowsComponent,
      },
      {
        path: 'movies',
        title: 'App Movies',
        component: MoviesComponent,
      },
];
