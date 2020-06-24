import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css'],
})
export class MainHeaderComponent implements OnInit {
  public nameApp: string;
  public pages: [string, string, string, string, string];

  constructor() {
    this.nameApp = 'SaludApp';
    this.pages = [
      'Home',
      'Agenda tu cita',
      'Consulta nuestros médicos',
      'Cotiza tu cirugía',
      'Médico en Casa',
    ];
  }

  ngOnInit(): void {}
}
