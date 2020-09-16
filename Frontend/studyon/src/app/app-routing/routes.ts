import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { StudyonsComponent } from '../studyons/studyons.component';
import { PeopleComponent } from '../people/people.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'studyons', component: StudyonsComponent },
  { path: 'people', component: PeopleComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
