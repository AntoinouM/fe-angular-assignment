import { Routes } from '@angular/router';
import { TvshowsComponentComponent } from './shared/components/tvshows-component/tvshows-component.component';
import { MoviesComponentComponent } from './shared/components/movies-component/movies-component.component';

export const routes: Routes = [
    {
        path: '',
        title: 'App TV Shows',
        component: TvshowsComponentComponent,
      },
      {
        path: 'movies',
        title: 'App Movies',
        component: MoviesComponentComponent,
      },
];
