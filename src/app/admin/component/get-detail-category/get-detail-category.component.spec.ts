import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetDetailCategoryComponent } from './get-detail-category.component';

describe('GetDetailCategoryComponent', () => {
  let component: GetDetailCategoryComponent;
  let fixture: ComponentFixture<GetDetailCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetDetailCategoryComponent]
    });
    fixture = TestBed.createComponent(GetDetailCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
