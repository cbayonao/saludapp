import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipoCirugiaComponent } from './form-tipo-cirugia.component';

describe('FormTipoCirugiaComponent', () => {
  let component: FormTipoCirugiaComponent;
  let fixture: ComponentFixture<FormTipoCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipoCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipoCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
