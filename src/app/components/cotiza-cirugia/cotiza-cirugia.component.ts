import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cotiza-cirugia',
  templateUrl: './cotiza-cirugia.component.html',
  styleUrls: ['./cotiza-cirugia.component.css'],
})
export class CotizaCirugiaComponent implements OnInit {
  public titulo: string;
  public accion: string;

  constructor() {
    this.titulo = 'Cotiza tu cirugía';
    this.accion = 'Cotizar';
  }

  ngOnInit(): void {}
}
