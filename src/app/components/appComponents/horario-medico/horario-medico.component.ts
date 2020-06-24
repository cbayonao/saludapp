import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario-medico',
  templateUrl: './horario-medico.component.html',
  styleUrls: ['./horario-medico.component.css'],
})
export class HorarioMedicoComponent implements OnInit {
  public dias: [string, string, string, string, string];
  public inicia: [string, string, string, string, string];
  public termina: [string, string, string, string, string];

  constructor() {
    this.dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
    this.inicia = ['06:00AM', '12:00PM', '06:00AM', '12:00PM', '06:00AM'];
    this.termina = ['12:00PM', '08:00PM', '12:00PM', '08:00PM', '12:00PM'];
  }

  ngOnInit(): void {}
}
