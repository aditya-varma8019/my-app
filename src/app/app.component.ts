import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router:Router) {

  }

  myField = ""
  title = 'my-first-angular'
  name = 'Aditya'
  student = {
    name : 'Aditya',
    rno : 120
  }


  employees = [
    {name:"ABC",empid:1,salary:100},
    {name:"AB",empid:10,salary:200},
    {name:"A",empid:12,salary:300}
  ];

  toggleName(){
    if(this.name === "Aditya") {
      this.name = "varma";
    }
    else {
      this.name = "Aditya";
    }
  }

array = [2,3,1,4]

showArray = true;
  toggleArray() {
    this.showArray = !this.showArray;
  }

  flowers = ["roses", "lily", "marigold"];
  showFlowers = true;

  displayFlowers() {
    this.showFlowers = !this.showFlowers;
  }
  gotoTest2() {
    this.router.navigate(['/test2']);
  }
  countries = [
    {"id" : 1, "name" : "India", "numberOfStates" : 29, "flag" : ""},
    {"id" : 2, "name" : "USA", "numberOfStates" : 50, "flag" : ""},
    {"id" : 3, "name" : "Canada", "numberOfStates" : 27, "flag" : ""}
  ];
}
