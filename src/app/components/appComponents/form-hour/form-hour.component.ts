import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-hour',
  templateUrl: './form-hour.component.html',
  styleUrls: ['./form-hour.component.css'],
})
export class FormHourComponent implements OnInit {
  public titulo: string;
  public hour: string;

  constructor() {
    this.titulo = 'Elige la hora de tu cita';
    this.hour = 'hour';
  }

  ngOnInit(): void {}
}
