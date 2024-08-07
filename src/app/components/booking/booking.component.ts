import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit
{
  //property
  countries: any;
  formGroup: FormGroup;

  constructor(private countriesService: CountriesService)
  {
    this.formGroup = new FormGroup({
      email: new FormControl(null),
      customerName: new FormControl(null),
      country: new FormControl(null)
    });
  }

  ngOnInit(): void
  {
    this.countriesService.getCountries().subscribe(
      (response) =>
      {
        this.countries = response;
      },
      (error) =>
      {
        console.log(error);
      });
  } 
  onSubmit(){
    console.log(this.formGroup);
    console.log("eterier form values:"+this.formGroup.value);
    console.log("------------------------------------------------------");
    console.log("email data:" + this.formGroup.value.email);
    console.log("country data:" + this.formGroup.value.country);
    console.log("customer name:"+ this.formGroup.value.customerName);
    console.log("------------------------------------------------------");

    debugger;
  }

  


}
