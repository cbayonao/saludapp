import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEspecialesComponent } from './card-especiales.component';

describe('CardEspecialesComponent', () => {
  let component: CardEspecialesComponent;
  let fixture: ComponentFixture<CardEspecialesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardEspecialesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardEspecialesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
