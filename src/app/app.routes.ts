import { Routes } from '@angular/router';
import { DetailedViewComponent } from './shared/components/detailed-view/detailed-view.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Application dashboard',
        component: DashboardComponent,
      },
      { path: ':mediaId', 
        component: DetailedViewComponent },
];
