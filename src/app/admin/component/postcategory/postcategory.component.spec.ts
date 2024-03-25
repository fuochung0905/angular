import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostcategoryComponent } from './postcategory.component';

describe('PostcategoryComponent', () => {
  let component: PostcategoryComponent;
  let fixture: ComponentFixture<PostcategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostcategoryComponent]
    });
    fixture = TestBed.createComponent(PostcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
