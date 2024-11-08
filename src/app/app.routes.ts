import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TvshowDetailComponent } from './features/tvshow-detail/tvshow-detail.component';
import { MovieDetailComponent } from './features/movie-detail/movie-detail.component';

export const routes: Routes = [
    {
      path: '',
      title: 'Application dashboard',
      component: DashboardComponent,
    },
    {
      path: '/tvshow/:id',
      component: TvshowDetailComponent,
    },
    {
      path: '/movie/:id',
      component: MovieDetailComponent,
    }

];
