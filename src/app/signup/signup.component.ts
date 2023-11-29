import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    // Retrieve user input and save it to local storage
    const userData = this.signupForm.value;
    localStorage.setItem('user', JSON.stringify(userData));
    
    // Display signup result
    this.showAlert('Signup successful');
    this.signupForm.reset();
  }

  private showAlert(message: string): void {
    alert(message);
  }
}
