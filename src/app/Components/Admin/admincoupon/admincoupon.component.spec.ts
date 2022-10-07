import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmincouponComponent } from './admincoupon.component';

describe('AdmincouponComponent', () => {
  let component: AdmincouponComponent;
  let fixture: ComponentFixture<AdmincouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmincouponComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmincouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
