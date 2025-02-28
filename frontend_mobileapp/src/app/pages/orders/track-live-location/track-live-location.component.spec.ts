import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackLiveLocationComponent } from './track-live-location.component';

describe('TrackLiveLocationComponent', () => {
  let component: TrackLiveLocationComponent;
  let fixture: ComponentFixture<TrackLiveLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackLiveLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackLiveLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
