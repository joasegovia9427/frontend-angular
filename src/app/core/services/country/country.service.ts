import { Injectable } from '@angular/core';
import { tap, catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Country } from '../../models/Country';
import { environment } from 'src/enviornments/environment';
import { Observable } from 'rxjs';

const LIST_FIELDS = [
  'name', // includes common, official, nativeName
  'cca2',
  'cca3',
  'capital',
  'population',
  'region',
  'flags',
  'flag',
].join(',');

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(): Observable<Country[]> {
    const urlParams = new URLSearchParams();
    urlParams.set('fields', LIST_FIELDS);

    const url = environment.url_api + `/all?${urlParams.toString()}`;
    return this.http.get<Country[]>(url);
  }
}
