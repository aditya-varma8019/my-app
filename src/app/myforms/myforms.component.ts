import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-myforms',
  templateUrl: './myforms.component.html',
  styleUrls: ['./myforms.component.css']
})
export class MyformsComponent {

  myform = new FormGroup({
    name: new FormControl('Aditya', [Validators.required, Validators.minLength(5)]),
    mobile: new FormControl('',[Validators.required, Validators.pattern('[6-9][0-9]{9}')]),
    email: new FormControl('',[Validators.email]),
    password: new FormControl('',[Validators.required, Validators.minLength(4)]),
  })


  save() {
    console.log(this.myform.value);
    
  }

  reset() {
    this.myform.reset();
  }

}

