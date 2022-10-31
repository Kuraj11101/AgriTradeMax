import {async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtomCurveComponent } from './buttom-curve.component';

describe('ButtomCurveComponent', () => {
  let component: ButtomCurveComponent;
  let fixture: ComponentFixture<ButtomCurveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtomCurveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtomCurveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
