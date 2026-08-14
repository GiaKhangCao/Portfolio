import { Routes } from '@angular/router';
import { MainPage } from './components/main-page/main-page';

export const routes: Routes = [
    {
        path: 'portfolio',
        component: MainPage
    },
    {
        path: '',
        redirectTo: 'portfolio',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'portfolio'
    }
];
