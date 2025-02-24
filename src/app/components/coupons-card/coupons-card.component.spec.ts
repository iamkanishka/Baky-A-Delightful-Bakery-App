import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsCardComponent } from './coupons-card.component';

describe('CouponsCardComponent', () => {
  let component: CouponsCardComponent;
  let fixture: ComponentFixture<CouponsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CouponsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CouponsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
