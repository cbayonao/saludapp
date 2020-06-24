import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-peso',
  templateUrl: './form-peso.component.html',
  styleUrls: ['./form-peso.component.css'],
})
export class FormPesoComponent implements OnInit {
  public titulo: string;
  public id: string;
  public medida: string;

  constructor() {
    this.titulo = 'Peso';
    this.id = 'peso';
    this.medida = 'Kg.';
  }
  ngOnInit(): void {}
}
