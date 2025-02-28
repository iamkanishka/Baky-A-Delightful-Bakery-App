import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBankCardComponent } from './add-bank-card.component';

describe('AddBankCardComponent', () => {
  let component: AddBankCardComponent;
  let fixture: ComponentFixture<AddBankCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBankCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBankCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
