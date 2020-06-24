import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-medico',
  templateUrl: './form-medico.component.html',
  styleUrls: ['./form-medico.component.css'],
})
export class FormMedicoComponent implements OnInit {
  options: Option[] = [
    { value: 'medico1', viewValue: 'Dra Maria Paez Rodriguez' },
    { value: 'medico-2', viewValue: 'Dr. Juan Pablo Caicedo' },
    { value: 'medico-3', viewValue: 'Dra. Claudia Villegas' },
    { value: 'medico-4', viewValue: 'Dr. Jose Fernando Martinez' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge el médico';
  }

  ngOnInit(): void {}
}
