import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizaCirugiaComponent } from './cotiza-cirugia.component';

describe('CotizaCirugiaComponent', () => {
  let component: CotizaCirugiaComponent;
  let fixture: ComponentFixture<CotizaCirugiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CotizaCirugiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizaCirugiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
