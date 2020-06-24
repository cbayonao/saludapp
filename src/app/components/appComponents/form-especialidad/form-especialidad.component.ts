import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-especialidad',
  templateUrl: './form-especialidad.component.html',
  styleUrls: ['./form-especialidad.component.css'],
})
export class FormEspecialidadComponent implements OnInit {
  options: Option[] = [
    { value: 'especialidad-1', viewValue: 'Medicina General' },
    { value: 'especialidad-2', viewValue: 'Pediatría' },
    { value: 'especialidad-3', viewValue: 'Medicina interna' },
    { value: 'especialidad-4', viewValue: 'Urología' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge la especialidad que necesitas';
  }

  ngOnInit(): void {}
}
