import { Component, OnInit } from '@angular/core';

interface Option {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-sede',
  templateUrl: './form-sede.component.html',
  styleUrls: ['./form-sede.component.css'],
})
export class FormSedeComponent implements OnInit {
  options: Option[] = [
    { value: 'sede-1', viewValue: 'Sede 1' },
    { value: 'sede-2', viewValue: 'Sede 2' },
    { value: 'sede-3', viewValue: 'Sede 3' },
  ];
  public titulo: string;

  constructor() {
    this.titulo = 'Escoge la sede que prefieres';
  }

  ngOnInit(): void {}
}
