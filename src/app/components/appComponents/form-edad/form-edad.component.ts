import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-edad',
  templateUrl: './form-edad.component.html',
  styleUrls: ['./form-edad.component.css'],
})
export class FormEdadComponent implements OnInit {
  public titulo: string;
  public id: string;

  constructor() {
    this.titulo = 'Edad';
    this.id = 'edad';
  }

  ngOnInit(): void {}
}
