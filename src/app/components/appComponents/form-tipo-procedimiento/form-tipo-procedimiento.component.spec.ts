import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoProcedimientoComponent } from './form-tipo-procedimiento.component';

describe('FormTipoProcedimientoComponent', () => {
  let component: FormTipoProcedimientoComponent;
  let fixture: ComponentFixture<FormTipoProcedimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoProcedimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoProcedimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
