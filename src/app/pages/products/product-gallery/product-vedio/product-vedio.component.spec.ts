import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductVedioComponent } from './product-vedio.component';

describe('ProductVedioComponent', () => {
  let component: ProductVedioComponent;
  let fixture: ComponentFixture<ProductVedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductVedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductVedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
