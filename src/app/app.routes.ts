import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MediaDetailComponent } from './features/media-detail/media-detail.component';


export const routes: Routes = [
    {
      path: '',
      title: 'Application dashboard',
      component: DashboardComponent,
    },
    {
      path: 'tvshow/:id',
      component: MediaDetailComponent,
    },
    {
      path: 'movie/:id',
      component: MediaDetailComponent,
    }

];
