import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorioMedicoComponent } from './directorio-medico.component';

describe('DirectorioMedicoComponent', () => {
  let component: DirectorioMedicoComponent;
  let fixture: ComponentFixture<DirectorioMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectorioMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectorioMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
