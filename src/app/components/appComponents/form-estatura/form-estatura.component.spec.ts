import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstaturaComponent } from './form-estatura.component';

describe('FormEstaturaComponent', () => {
  let component: FormEstaturaComponent;
  let fixture: ComponentFixture<FormEstaturaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstaturaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
