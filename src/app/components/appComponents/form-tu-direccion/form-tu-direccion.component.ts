import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-tu-direccion',
  templateUrl: './form-tu-direccion.component.html',
  styleUrls: ['./form-tu-direccion.component.css'],
})
export class FormTuDireccionComponent implements OnInit {
  options: Option[] = [
    { value: 'city-1', viewValue: 'Bogota' },
    { value: 'city-2', viewValue: 'Medellin' },
    { value: 'city-3', viewValue: 'Cali' },
    { value: 'city-4', viewValue: 'Bucaramanga' },
  ];
  public titulo: string;
  public placeHolDir: string;
  public idDir: string;
  public idCity: string;

  constructor() {
    this.titulo = 'Ingresa tu ciudad y direccion';
    this.placeHolDir = 'Dirección';
    this.idDir = 'direccion';
    this.idCity = 'ciudad';
  }

  ngOnInit(): void {}
}
