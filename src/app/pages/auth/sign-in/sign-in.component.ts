import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-sign-in',
 
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {
 
 
  name: string = '';
  email: string = '';
  password: string = '';
  agreeTerms: boolean = false;
  passwordHidden: boolean = true;
  constructor(private _page: Page, private router: Router) {
    this._page.actionBarHidden = true;
  }
 
  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  onSignUp() {
    console.log('Signing up with:', this.name, this.email, this.password);
    // Handle sign-up logic
  }

  onSignIn() {
    this.router.navigate(['/login']);
  }

  onAppleSignUp() {
    console.log('Apple Sign-Up clicked');
  }

  onGoogleSignUp() {
    console.log('Google Sign-Up clicked');
  }

  onFacebookSignUp() {
    console.log('Facebook Sign-Up clicked');
  }

  onTerms() {
    console.log('Terms & Conditions clicked');
    // Navigate to terms page
  }

}
