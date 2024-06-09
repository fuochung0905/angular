import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotPhoneNumberComponent } from './not-phone-number.component';

describe('NotPhoneNumberComponent', () => {
  let component: NotPhoneNumberComponent;
  let fixture: ComponentFixture<NotPhoneNumberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotPhoneNumberComponent]
    });
    fixture = TestBed.createComponent(NotPhoneNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
