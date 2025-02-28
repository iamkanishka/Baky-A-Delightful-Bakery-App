 

import { Component } from '@angular/core';
import { ImagePicker } from '@nativescript/imagepicker';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'app-leave-a-review',
  
  templateUrl: './leave-a-review.component.html',
  styleUrl: './leave-a-review.component.scss'
})
export class LeaveAReviewComponent {
  stars = ['~/images/star-outline.png', '~/images/star-outline.png', '~/images/star-outline.png', '~/images/star-outline.png', '~/images/star-outline.png'];
  reviewText = '';

  constructor(private router: RouterExtensions) {}

  goBack() {
    this.router.back();
  }

  rate(rating: number) {
    for (let i = 0; i < this.stars.length; i++) {
      this.stars[i] = i < rating ? '~/images/star-filled.png' : '~/images/star-outline.png';
    }
  }

  pickImage() {
    // let context = ImagePicker.create({ mode: 'single' });
    let context :any 
    context
      .authorize()
      .then(() => context.present())
      .then(selection => {
        console.log('Selected image:', selection);
      })
      .catch(err => console.log('Image selection error:', err));
  }

  cancel() {
    this.router.back();
  }

  submitReview() {
    console.log('Review submitted:', this.reviewText);
  }
}
 
