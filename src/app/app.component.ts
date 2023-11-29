import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {

  }

  myField = "";
  title = 'my-first-angular';
  name = 'Aditya';
  student = {
    name: 'Aditya',
    rno: 120
  };

  employees = [
    { name: "ABC", empid: 1, salary: 100 },
    { name: "AB", empid: 10, salary: 200 },
    { name: "A", empid: 12, salary: 300 }
  ];

  toggleName() {
    if (this.name === "Aditya") {
      this.name = "varma";
    }
    else {
      this.name = "Aditya";
    }
  }

  array = [2, 3, 1, 4];

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
    { "id": 1, "name": "India", "numberOfStates": 29, "flag": "" },
    { "id": 2, "name": "USA", "numberOfStates": 50, "flag": "" },
    { "id": 3, "name": "Canada", "numberOfStates": 27, "flag": "" }
  ];

  isHovered1 = false;
  isHovered2 = false;

  texts1 = [
    { link: '/assignment1/q1', text: 'Question 1' },
    { link: '/assignment1/q2', text: 'Question 2' },
    { link: '/assignment1/q3', text: 'Question 3' },
    { link: '/assignment1/q4', text: 'Question 4' },
    { link: '/assignment1/q5', text: 'Question 5' },
    { link: '/assignment1/q6', text: 'Question 6' },
    { link: '/assignment1/q7', text: 'Question 7' },
    { link: '/assignment1/q8', text: 'Question 8' },
    { link: '/assignment1/q9', text: 'Question 9' }
  ];

  texts2 = [
    { link: '/link1', text: 'Link 1' },
    { link: '/link2', text: 'Link 2' },
    { link: '/link3', text: 'Link 3' }
  ];

  activeIndex = -1;

  // Function to handle hover events
  handleHover(event: MouseEvent, index: number) {
    if (event.type === 'mouseenter') {
      this.activeIndex = index;
    } else if (event.type === 'mouseleave') {
      this.activeIndex = -1;
    }
  }
}


  

