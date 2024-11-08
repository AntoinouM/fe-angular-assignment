import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    {
      path: '',
      title: 'Application dashboard',
      component: DashboardComponent,
    },

];
