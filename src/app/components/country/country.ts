import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

import { tap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryService } from 'src/app/core/services/country/country.service';
import { Country as CountryModel } from 'src/app/core/models/Country';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.html',
  styleUrl: './country.css',
})
export class Country implements OnInit {
  countryList: CountryModel[] = [];

  constructor(
    private countryService: CountryService,
    private changesDetectorRef: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.fetchCountry();
  }

  fetchCountry() {
    this.countryService
      .getAllCountries()
      .pipe(
        tap(() => console.log('Fetching countries...')),
        // tap((countryResponseList: CountryModel[]) =>
        //   console.log(`Received ${countryResponseList.length} countries`),
        // ),
        // tap((countryResponseList: CountryModel[]) => {
        //   console.log(`Received countries table:`);
        //   console.table({ countryResponseList });
        // }),
        map((countryResponseList: CountryModel[]) =>
          countryResponseList.sort((a, b) =>
            a.name.common.localeCompare(b.name.common),
          ),
        ),
        catchError((error) => {
          console.error('Error loading countries:', error);
          return of([]);
        }),
      )
      .subscribe((countryResponseList) => {
        // console.log('countryResponseList:', countryResponseList);
        // console.log(countryResponseList[0]);
        this.countryList = countryResponseList;
        this.changesDetectorRef.markForCheck();
      });
  }
}
