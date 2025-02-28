import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderReviewsComponent } from './order-reviews.component';

describe('OrderReviewsComponent', () => {
  let component: OrderReviewsComponent;
  let fixture: ComponentFixture<OrderReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderReviewsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
