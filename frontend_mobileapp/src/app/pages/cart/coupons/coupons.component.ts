import { Component } from '@angular/core';

@Component({
  selector: 'app-coupons',
 
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss'
})
export class CouponsComponent {
  coupons = [
    { code: 'WELCOME200', description: 'Add items worth $40 more to unlock', offer: 'Get 50% OFF' },
    { code: 'CASHBACK12', description: 'Add items worth $50 more to unlock', offer: 'Up to $12.00 cashback' },
    { code: 'FEST2COST', description: 'Add items worth $25 more to unlock', offer: 'Get 50% OFF for Combo' },
    { code: 'WELCOME50', description: 'Add items worth $100 more to unlock', offer: 'Get 10% OFF' },
  ];
}
