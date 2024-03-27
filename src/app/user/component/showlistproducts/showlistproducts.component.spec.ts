import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowlistproductsComponent } from './showlistproducts.component';

describe('ShowlistproductsComponent', () => { 
  let component: ShowlistproductsComponent;
  let fixture: ComponentFixture<ShowlistproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowlistproductsComponent]
    });
    fixture = TestBed.createComponent(ShowlistproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
