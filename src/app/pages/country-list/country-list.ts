import { Component } from '@angular/core';
import { Country } from '../../components/country/country';

@Component({
  selector: 'app-country-list',
  imports: [Country],
  templateUrl: './country-list.html',
  styleUrl: './country-list.css',
})
export class CountryList {}
