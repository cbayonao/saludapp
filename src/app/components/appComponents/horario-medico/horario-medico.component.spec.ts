import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioMedicoComponent } from './horario-medico.component';

describe('HorarioMedicoComponent', () => {
  let component: HorarioMedicoComponent;
  let fixture: ComponentFixture<HorarioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorarioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
