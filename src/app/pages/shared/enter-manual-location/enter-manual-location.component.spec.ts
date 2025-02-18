import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterManualLocationComponent } from './enter-manual-location.component';

describe('EnterManualLocationComponent', () => {
  let component: EnterManualLocationComponent;
  let fixture: ComponentFixture<EnterManualLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterManualLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterManualLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
