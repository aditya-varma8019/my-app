import { Component } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent {
  countries:any= [];
  displayCountries:any = [];
  constructor(private service:CountriesService) { }

  ngOnInit(): void {
    this.getAllCountries();
  }

  getAllCountries(){
    this.service.getAll().subscribe((success:any)=>{
      this.countries = success;
      this.displayCountries = this.countries;
      console.log("Success =====>",this.countries);
    }, (error:any)=>console.log("Error =====>",error)
    );
  }

  findCountries(event:any){
    let keyword = event.target.value;
    this.displayCountries = this.countries.filter((country:any)=>{
      return country.name.common.toLowerCase().includes(keyword.toLowerCase());
    })
  }
}
