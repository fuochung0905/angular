import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostproductComponent } from './postproduct.component';

describe('PostproductComponent', () => {
  let component: PostproductComponent;
  let fixture: ComponentFixture<PostproductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostproductComponent]
    });
    fixture = TestBed.createComponent(PostproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
