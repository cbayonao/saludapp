import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCardMedicoComponent } from './container-card-medico.component';

describe('ContainerCardMedicoComponent', () => {
  let component: ContainerCardMedicoComponent;
  let fixture: ComponentFixture<ContainerCardMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCardMedicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCardMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
