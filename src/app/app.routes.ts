import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CountryList } from './pages/country-list/country-list';
import { ROUTES_PATHS } from './core/models/routes';

export const routes: Routes = [
  { path: ROUTES_PATHS.HOME, component: HomePage },
  { path: ROUTES_PATHS.COUNTRY, component: CountryList },
];
