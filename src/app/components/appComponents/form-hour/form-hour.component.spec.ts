import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHourComponent } from './form-hour.component';

describe('FormHourComponent', () => {
  let component: FormHourComponent;
  let fixture: ComponentFixture<FormHourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
