import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewcouponComponent } from './adminviewcoupon.component';

describe('AdminviewcouponComponent', () => {
  let component: AdminviewcouponComponent;
  let fixture: ComponentFixture<AdminviewcouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewcouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewcouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
