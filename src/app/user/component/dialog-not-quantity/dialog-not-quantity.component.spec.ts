import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNotQuantityComponent } from './dialog-not-quantity.component';

describe('DialogNotQuantityComponent', () => {
  let component: DialogNotQuantityComponent;
  let fixture: ComponentFixture<DialogNotQuantityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogNotQuantityComponent]
    });
    fixture = TestBed.createComponent(DialogNotQuantityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
