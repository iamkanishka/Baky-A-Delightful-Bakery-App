import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnableLocationComponent } from './enable-location.component';

describe('EnableLocationComponent', () => {
  let component: EnableLocationComponent;
  let fixture: ComponentFixture<EnableLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnableLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnableLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
