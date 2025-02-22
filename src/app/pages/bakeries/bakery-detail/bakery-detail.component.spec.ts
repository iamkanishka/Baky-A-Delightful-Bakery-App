import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryDetailComponent } from './bakery-detail.component';

describe('BakeryDetailComponent', () => {
  let component: BakeryDetailComponent;
  let fixture: ComponentFixture<BakeryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
