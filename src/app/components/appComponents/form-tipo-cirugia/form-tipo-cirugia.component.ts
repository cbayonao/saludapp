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
    { value: 'tipo-1', viewValue: 'Cirugia plastica' },
    { value: 'tipo-2', viewValue: 'Cirugia pediatrica' },
    { value: 'tipo-3', viewValue: 'Cirugia Maxilofacial' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge el tipo de cirugia que quieres cotizar';
  }

  ngOnInit(): void {}
}
