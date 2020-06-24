import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGeneralesComponent } from './card-generales.component';

describe('CardGeneralesComponent', () => {
  let component: CardGeneralesComponent;
  let fixture: ComponentFixture<CardGeneralesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardGeneralesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
