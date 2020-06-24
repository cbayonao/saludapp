import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesoComponent } from './form-peso.component';

describe('FormPesoComponent', () => {
  let component: FormPesoComponent;
  let fixture: ComponentFixture<FormPesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
