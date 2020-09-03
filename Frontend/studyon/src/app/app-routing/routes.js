import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home',  component: homeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
