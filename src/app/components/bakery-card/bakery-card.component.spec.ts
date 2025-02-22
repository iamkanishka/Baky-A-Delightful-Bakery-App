import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryCardComponent } from './bakery-card.component';

describe('BakeryCardComponent', () => {
  let component: BakeryCardComponent;
  let fixture: ComponentFixture<BakeryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BakeryCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BakeryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
