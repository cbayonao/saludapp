import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-antecedentes-medicos',
  templateUrl: './form-antecedentes-medicos.component.html',
  styleUrls: ['./form-antecedentes-medicos.component.css'],
})
export class FormAntecedentesMedicosComponent implements OnInit {
  public titulo: string;
  public id: string;
  public plaHolder: string;

  constructor() {
    this.titulo =
      'Ingresa tus antecedentes médicos, medicamentos actuales y otras consideraciones.';
    this.id = 'antecedentes';
    this.plaHolder = 'Ingresa los detalles de tu salud';
  }

  ngOnInit(): void {}
}
