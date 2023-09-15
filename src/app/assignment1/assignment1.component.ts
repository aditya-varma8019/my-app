import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment1',
  templateUrl: './assignment1.component.html',
  styleUrls: ['./assignment1.component.css'],
})
export class Assignment1Component {
  arr = [
    {
      Question: 'What is REST API?',
      Answer:
        'Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating web services. REST API is a way of accessing web services in a simple and flexible way without having any processing.REST technology is generally preferred to the more robust Simple Object Access Protocol (SOAP) technology because REST uses less bandwidth, simple and flexible making it more suitable for internet usage. It’s used to fetch or give some information from a web service. All communication done via REST API uses only HTTP request. ',
    },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
    { Question: '', Answer: '' },
  ];
}
