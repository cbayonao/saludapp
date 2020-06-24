import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsDirMedicoComponent } from './buttons-dir-medico.component';

describe('ButtonsDirMedicoComponent', () => {
  let component: ButtonsDirMedicoComponent;
  let fixture: ComponentFixture<ButtonsDirMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonsDirMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsDirMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
