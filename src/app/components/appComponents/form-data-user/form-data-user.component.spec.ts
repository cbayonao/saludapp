import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataUserComponent } from './form-data-user.component';

describe('FormDataUserComponent', () => {
  let component: FormDataUserComponent;
  let fixture: ComponentFixture<FormDataUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormDataUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
