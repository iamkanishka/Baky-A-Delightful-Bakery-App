import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryLoaderComponent } from './category-loader.component';

describe('CategoryLoaderComponent', () => {
  let component: CategoryLoaderComponent;
  let fixture: ComponentFixture<CategoryLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
