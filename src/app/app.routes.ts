import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CountryList } from './pages/country-list/country-list';
import { ROUTES_PATHS } from './core/models/routes';
import { CountryDetail } from './pages/country-detail/country-detail';

export const routes: Routes = [
  { path: ROUTES_PATHS.HOME, component: HomePage },
  { path: ROUTES_PATHS.COUNTRY, component: CountryList },
  { path: `${ROUTES_PATHS.COUNTRY}/:id`, component: CountryDetail },
  // { path: 'country/:id', component: CountryDetail },
];
