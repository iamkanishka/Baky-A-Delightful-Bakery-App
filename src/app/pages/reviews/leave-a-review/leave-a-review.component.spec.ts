import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveAReviewComponent } from './leave-a-review.component';

describe('LeaveAReviewComponent', () => {
  let component: LeaveAReviewComponent;
  let fixture: ComponentFixture<LeaveAReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveAReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LeaveAReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
