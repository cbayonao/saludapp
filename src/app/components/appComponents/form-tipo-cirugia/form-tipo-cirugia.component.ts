import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-tipo-cirugia',
  templateUrl: './form-tipo-cirugia.component.html',
  styleUrls: ['./form-tipo-cirugia.component.css'],
})
export class FormTipoCirugiaComponent implements OnInit {
  options: Option[] = [
    { value: 'tipo-1', viewValue: 'Cirugía plastica' },
    { value: 'tipo-2', viewValue: 'Cirugía pediatrica' },
    { value: 'tipo-3', viewValue: 'Cirugía Maxilofacial' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge el tipo de cirugía que quieres cotizar';
  }

  ngOnInit(): void {}
}
