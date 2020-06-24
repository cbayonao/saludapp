import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTuDireccionComponent } from './form-tu-direccion.component';

describe('FormTuDireccionComponent', () => {
  let component: FormTuDireccionComponent;
  let fixture: ComponentFixture<FormTuDireccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTuDireccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTuDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
