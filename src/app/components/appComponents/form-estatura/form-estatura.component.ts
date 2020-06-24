import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-estatura',
  templateUrl: './form-estatura.component.html',
  styleUrls: ['./form-estatura.component.css'],
})
export class FormEstaturaComponent implements OnInit {
  public titulo: string;
  public id: string;
  public medida: string;

  constructor() {
    this.titulo = 'Estatura';
    this.id = 'estatura';
    this.medida = 'cm.';
  }

  ngOnInit(): void {}
}
