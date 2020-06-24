import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoEnCasaComponent } from './medico-en-casa.component';

describe('MedicoEnCasaComponent', () => {
  let component: MedicoEnCasaComponent;
  let fixture: ComponentFixture<MedicoEnCasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicoEnCasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicoEnCasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
