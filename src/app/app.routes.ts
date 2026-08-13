import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { MainPage } from './components/pages/main-page/main-page';

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
