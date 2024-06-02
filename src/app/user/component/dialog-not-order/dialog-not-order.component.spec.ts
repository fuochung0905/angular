import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotOrderComponent } from './dialog-not-order.component';

describe('DialogNotOrderComponent', () => {
  let component: DialogNotOrderComponent;
  let fixture: ComponentFixture<DialogNotOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNotOrderComponent]
    });
    fixture = TestBed.createComponent(DialogNotOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
