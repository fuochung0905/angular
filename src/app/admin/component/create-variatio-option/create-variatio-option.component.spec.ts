import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVariatioOptionComponent } from './create-variatio-option.component';

describe('CreateVariatioOptionComponent', () => {
  let component: CreateVariatioOptionComponent;
  let fixture: ComponentFixture<CreateVariatioOptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVariatioOptionComponent]
    });
    fixture = TestBed.createComponent(CreateVariatioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
