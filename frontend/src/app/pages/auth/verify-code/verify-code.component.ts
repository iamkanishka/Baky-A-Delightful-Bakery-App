import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-code',
  
  templateUrl: './verify-code.component.html',
  styleUrl: './verify-code.component.scss'
})
export class VerifyCodeComponent {

  otp1: string = '';
  otp2: string = '';
  otp3: string = '';
  otp4: string = '';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/previous-page']);
  }

  resendCode() {
    console.log("Resend code tapped");
  }

  verifyOtp() {
    const otp = this.otp1 + this.otp2 + this.otp3 + this.otp4;
    console.log("Entered OTP:", otp);
    if (otp.length === 4) {
      // Implement verification logic
      console.log("OTP verified successfully!");
    } else {
      console.log("Please enter a valid 4-digit OTP");
    }
  }

}
