import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExistsComponent } from './dialog-exists.component';

describe('DialogExistsComponent', () => {
  let component: DialogExistsComponent;
  let fixture: ComponentFixture<DialogExistsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogExistsComponent]
    });
    fixture = TestBed.createComponent(DialogExistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
