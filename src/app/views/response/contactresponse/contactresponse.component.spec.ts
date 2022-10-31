import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactresponseComponent } from './contactresponse.component';

describe('ContactresponseComponent', () => {
  let component: ContactresponseComponent;
  let fixture: ComponentFixture<ContactresponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactresponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
