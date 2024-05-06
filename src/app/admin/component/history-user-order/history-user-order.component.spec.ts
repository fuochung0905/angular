import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryUserOrderComponent } from './history-user-order.component';

describe('HistoryUserOrderComponent', () => {
  let component: HistoryUserOrderComponent;
  let fixture: ComponentFixture<HistoryUserOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistoryUserOrderComponent]
    });
    fixture = TestBed.createComponent(HistoryUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
