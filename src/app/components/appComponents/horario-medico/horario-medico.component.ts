import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  dia: string;
  desde: string;
  hasta: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { dia: 'Lunes', desde: '06:00', hasta: '13:00' },
  { dia: 'Martes', desde: '08:00', hasta: '15:00' },
  { dia: 'Miercoles', desde: '12:00', hasta: '19:00' },
  { dia: 'Jueves', desde: '06:00', hasta: '13:00' },
  { dia: 'Viernes', desde: 'Dia libre', hasta: 'Dia libre' },
  { dia: 'Sabado', desde: '12:00', hasta: '19:00' },
  { dia: 'Domingo', desde: '09:00', hasta: '12:00' },
];

@Component({
  selector: 'app-horario-medico',
  templateUrl: './horario-medico.component.html',
  styleUrls: ['./horario-medico.component.css'],
})
export class HorarioMedicoComponent implements OnInit {
  displayedColumns: string[] = ['dia', 'desde', 'hasta'];
  dataSource = ELEMENT_DATA;

  constructor() {}

  ngOnInit(): void {}
}
