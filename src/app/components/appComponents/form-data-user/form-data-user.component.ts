import { Component, OnInit } from '@angular/core';
interface TipoID {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-form-data-user',
  templateUrl: './form-data-user.component.html',
  styleUrls: ['./form-data-user.component.css'],
})
export class FormDataUserComponent implements OnInit {
  tipoids: TipoID[] = [
    { value: 'CC', viewValue: 'Cedula de ciudadanía' },
    { value: 'CE', viewValue: 'Cedula de extranjería' },
    { value: 'TI', viewValue: 'Tarjeta de Identidad' },
    { value: 'NUIP', viewValue: 'NUIP' },
    { value: 'PA', viewValue: 'Pasaporte' },
  ];

  public title: string;
  public name: string;
  public lastname: string;
  public numID: string;
  public email: string;
  public numTel: string;

  constructor() {
    this.title = 'Ingresa tu tipo de identificación';
  }

  ngOnInit(): void {}
}
