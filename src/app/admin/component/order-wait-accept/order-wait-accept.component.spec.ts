import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderWaitAcceptComponent } from './order-wait-accept.component';

describe('OrderWaitAcceptComponent', () => {
  let component: OrderWaitAcceptComponent;
  let fixture: ComponentFixture<OrderWaitAcceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderWaitAcceptComponent]
    });
    fixture = TestBed.createComponent(OrderWaitAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
