import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-directorio',
  templateUrl: './navbar-directorio.component.html',
  styleUrls: ['./navbar-directorio.component.css'],
})
export class NavbarDirectorioComponent implements OnInit {
  public typeSearch: [string, string, string];
  public search: string;

  constructor() {
    this.typeSearch = ['Todos', 'Por Sede', 'Por especialidad'];
    this.search = 'Busqueda';
  }

  ngOnInit(): void {}
}
