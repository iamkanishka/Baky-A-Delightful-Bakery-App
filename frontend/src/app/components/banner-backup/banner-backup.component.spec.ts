import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerBackupComponent } from './banner-backup.component';

describe('BannerBackupComponent', () => {
  let component: BannerBackupComponent;
  let fixture: ComponentFixture<BannerBackupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerBackupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerBackupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
