import { Routes } from '@angular/router';
import { DiscoverComponent } from './discover/discover.component';
import { LandingComponent } from './landing/landing.component';
import { JoinComponent } from './join/join.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'landing',
    redirectTo: '',
  },
  {
    path: 'discover',
    component: DiscoverComponent,
  },
  {
    path: 'join',
    component: JoinComponent,
  },
  {
    path: '**',
    component: NotfoundpageComponent,
  },
];
