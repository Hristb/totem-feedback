import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'totem',
        loadComponent: () => import('./totem/totem.component'),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./totem/pages/home/home.component'),
            },
            {
                path: 'feedback',
                loadComponent: () => import('./totem/pages/feedback/feedback.component'),
            },
            {
                path:'',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },

    {
        path: '',
        redirectTo: '/totem',
        pathMatch: 'full'
    }
];
