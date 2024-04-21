import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePIVariationComponent } from './create-pivariation.component';

describe('CreatePIVariationComponent', () => {
  let component: CreatePIVariationComponent;
  let fixture: ComponentFixture<CreatePIVariationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatePIVariationComponent]
    });
    fixture = TestBed.createComponent(CreatePIVariationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
