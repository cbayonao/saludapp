import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-dir-medico',
  templateUrl: './buttons-dir-medico.component.html',
  styleUrls: ['./buttons-dir-medico.component.css'],
})
export class ButtonsDirMedicoComponent implements OnInit {
  public options: [string, string];

  constructor() {
    this.options = ['Agenda tu cita', 'Cotiza Cirugia'];
  }

  ngOnInit(): void {}
}
