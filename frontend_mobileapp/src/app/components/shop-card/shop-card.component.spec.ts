import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopCardComponent } from './shop-card.component';

describe('ShopCardComponent', () => {
  let component: ShopCardComponent;
  let fixture: ComponentFixture<ShopCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
