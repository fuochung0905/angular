import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InTransportComponent } from './in-transport.component';

describe('InTransportComponent', () => {
  let component: InTransportComponent;
  let fixture: ComponentFixture<InTransportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InTransportComponent]
    });
    fixture = TestBed.createComponent(InTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
