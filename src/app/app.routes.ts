import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { Experience } from './components/pages/experience/experience';
import { SkillsTools } from './components/pages/skills-tools/skills-tools';

export const routes: Routes = [
    {
        path: 'home',
        component: Home
    },
    {
        path: 'about',
        component: About
    },
    {
        path: 'experience',
        component: Experience
    },
    {
        path: 'skills-tools',
        component: SkillsTools
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
