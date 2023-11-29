import { Component } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
// import { Validators } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // Retrieve user input
    const enteredUsername = this.loginForm.get('username')?.value;
    const enteredPassword = this.loginForm.get('password')?.value;

    // Check local storage for user account
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.username === enteredUsername && user.password === enteredPassword) {
        this.showAlert('Login successful');
        this.loginForm.reset();
      } else {
        this.showAlert('Invalid username or password');
      }
    } else {
      this.showAlert('User not found');
    }
  }

  private showAlert(message: string): void {
    alert(message);
  }
}
