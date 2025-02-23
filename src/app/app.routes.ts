import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home',
        loadComponent: () => import('./totem/totem.component'),
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
