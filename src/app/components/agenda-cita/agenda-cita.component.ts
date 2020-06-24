import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda-cita',
  templateUrl: './agenda-cita.component.html',
  styleUrls: ['./agenda-cita.component.css'],
})
export class AgendaCitaComponent implements OnInit {
  public titlePage: string;
  public nameBut: string;

  constructor() {
    this.titlePage = 'Agenda tu cita';
    this.nameBut = 'Agendar cita';
  }
  ngOnInit(): void {}
}
