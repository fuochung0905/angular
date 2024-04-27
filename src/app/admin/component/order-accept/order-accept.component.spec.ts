import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAcceptComponent } from './order-accept.component';

describe('OrderAcceptComponent', () => {
  let component: OrderAcceptComponent;
  let fixture: ComponentFixture<OrderAcceptComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderAcceptComponent]
    });
    fixture = TestBed.createComponent(OrderAcceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
