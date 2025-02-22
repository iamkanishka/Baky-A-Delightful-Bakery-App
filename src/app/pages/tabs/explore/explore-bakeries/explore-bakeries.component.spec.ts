import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBakeriesComponent } from './explore-bakeries.component';

describe('ExploreBakeriesComponent', () => {
  let component: ExploreBakeriesComponent;
  let fixture: ComponentFixture<ExploreBakeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExploreBakeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreBakeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
