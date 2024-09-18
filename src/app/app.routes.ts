import { Routes } from '@angular/router';
import {canActivate, redirectUnauthorizedTo} from "@angular/fire/compat/auth-guard";

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/components/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./features/movie-list/movie-list.component').then(m => m.MovieListComponent),
      },
      {
        path: 'movie/:id',
        loadComponent: () => import('./features/movie-details/movie-details.component').then(m => m.MovieDetailsComponent),
      },
      {
        path: 'add-review/:id',
        loadComponent: () => import('./features/add-review/add-review.component').then(m => m.AddReviewComponent),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'reviews',
        loadComponent: () => import('./features/review-list/review-list.component').then(m => m.ReviewListComponent),
      },
      {
        path: 'profile',
        loadComponent: () => import('./features/profile/profile.component').then(m => m.ProfileComponent),
        ...canActivate(redirectUnauthorizedToLogin),
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./features/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
