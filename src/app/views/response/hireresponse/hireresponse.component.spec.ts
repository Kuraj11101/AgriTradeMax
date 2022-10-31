import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireresponseComponent } from './hireresponse.component';

describe('HireresponseComponent', () => {
  let component: HireresponseComponent;
  let fixture: ComponentFixture<HireresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HireresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HireresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
