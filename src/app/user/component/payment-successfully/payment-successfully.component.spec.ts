import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentSuccessfullyComponent } from './payment-successfully.component';

describe('PaymentSuccessfullyComponent', () => {
  let component: PaymentSuccessfullyComponent;
  let fixture: ComponentFixture<PaymentSuccessfullyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentSuccessfullyComponent]
    });
    fixture = TestBed.createComponent(PaymentSuccessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
