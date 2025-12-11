import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CountryList } from './pages/country-list/country-list';

export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'country', component: CountryList },
];
