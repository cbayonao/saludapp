import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-tipo-procedimiento',
  templateUrl: './form-tipo-procedimiento.component.html',
  styleUrls: ['./form-tipo-procedimiento.component.css'],
})
export class FormTipoProcedimientoComponent implements OnInit {
  options: Option[] = [
    { value: 'tipo-1', viewValue: 'Liposucción' },
    { value: 'tipo-2', viewValue: 'Rinoplastia' },
    { value: 'tipo-3', viewValue: 'Lipoescultura' },
    { value: 'tipo-4', viewValue: 'Abdominoplastia' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge el procedimiento ha realizar';
  }

  ngOnInit(): void {}
}
