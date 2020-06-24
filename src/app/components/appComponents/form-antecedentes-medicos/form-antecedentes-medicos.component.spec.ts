import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAntecedentesMedicosComponent } from './form-antecedentes-medicos.component';

describe('FormAntecedentesMedicosComponent', () => {
  let component: FormAntecedentesMedicosComponent;
  let fixture: ComponentFixture<FormAntecedentesMedicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormAntecedentesMedicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAntecedentesMedicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
