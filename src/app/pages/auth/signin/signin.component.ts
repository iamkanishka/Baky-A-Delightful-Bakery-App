import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Page } from '@nativescript/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
  constructor(private _page: Page, private router: Router) {
    this._page.actionBarHidden = true;
  }

  email: string = '';
  password: string = '';
  isPasswordHidden: boolean = true;

 

  /**
   * Toggle password visibility
   */
  togglePasswordVisibility() {
    this.isPasswordHidden = !this.isPasswordHidden;
  }

  /**
   * Handle Sign In button click
   */
  onSignIn() {
    if (!this.email || !this.password) {
      alert({
        title: "Error",
        message: "Please enter both email and password.",
        okButtonText: "OK"
      });
      return;
    }

    console.log('Signing in with:', this.email, this.password);
    
    // TODO: Replace with actual authentication logic (Firebase, API, etc.)
    // if (this.email === "user@example.com" && this.password === "password123") {
    //   alert({
    //     title: "Success",
    //     message: "Login successful!",
    //     okButtonText: "OK"
    //   }).then(() => {
    //     this.router.navigate(['/home']); // Navigate to home page after login
    //   });
    // } else {
    //   alert({
    //     title: "Login Failed",
    //     message: "Invalid email or password.",
    //     okButtonText: "Try Again"
    //   });
    // }
  }

  /**
   * Handle Forgot Password link click
   */
  onForgotPassword() {
    // prompt({
    //   title: "Reset Password",
    //   message: "Enter your email to reset your password.",
    //   okButtonText: "Send",
    //   cancelButtonText: "Cancel",
    //   inputType: "email"
    // }).then((result) => {
    //   if (result.result && result.text) {
    //     console.log("Password reset email sent to:", result.text);
    //     alert({
    //       title: "Success",
    //       message: "A password reset link has been sent to your email.",
    //       okButtonText: "OK"
    //     });
    //   }
    // });
  }

  /**
   * Handle Sign Up link click
   */
  onSignUp() {
    this.router.navigate(['/signup']); // Navigate to sign-up page
  }

  /**
   * Handle social login button clicks
   */
  onSocialLogin(provider: string) {
    console.log(`Logging in with ${provider}`);
    alert({
      title: "Social Login",
      message: `Login with ${provider} is not implemented yet.`,
      okButtonText: "OK"
    });
  }

}
