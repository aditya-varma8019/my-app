import { Component } from '@angular/core';
import { CountriesService } from '../countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent {
  countries: any = [];
  displayCountries: any = [];
  searchCountry: string = '';

  constructor(private service: CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries() {
    this.service.getAll().subscribe(
      (success: any) => {
        this.countries = success;
        this.displayCountries = this.countries;
        console.log("Success =====>", this.countries);
      },
      (error: any) => console.log("Error =====>", error)
    );
  }

  findCountries() {
    this.displayCountries = this.countries.filter((country: any) => {
      return country.name.common.toLowerCase().includes(this.searchCountry.toLowerCase());
    });
  }
}
