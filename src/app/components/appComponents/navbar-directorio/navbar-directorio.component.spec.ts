import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarDirectorioComponent } from './navbar-directorio.component';

describe('NavbarDirectorioComponent', () => {
  let component: NavbarDirectorioComponent;
  let fixture: ComponentFixture<NavbarDirectorioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarDirectorioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarDirectorioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
