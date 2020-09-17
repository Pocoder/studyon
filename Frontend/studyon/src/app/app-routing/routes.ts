import { Routes, CanActivate } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../services/auth-guard.service';

import { HomeComponent } from '../home/home.component';
import { StudyonsComponent } from '../studyons/studyons.component';
import { PeopleComponent } from '../people/people.component';
import { ProfileComponent } from '../profile/profile.component';
import { StudyonComponent } from '../studyon/studyon.component';

export const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: 'studyons', component: StudyonsComponent},
  { path: 'people', component: PeopleComponent},
  { path: 'people/:id', component: ProfileComponent },
  { path: 'studyons/:id', component: StudyonComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
