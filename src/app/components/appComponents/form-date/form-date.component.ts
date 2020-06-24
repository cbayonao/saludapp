import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.css'],
})
export class FormDateComponent implements OnInit {
  public titulo: string;
  public time: string;

  constructor() {
    this.titulo = 'Elige la fecha de tu cita';
    this.time = 'date';
  }

  ngOnInit(): void {}
}
