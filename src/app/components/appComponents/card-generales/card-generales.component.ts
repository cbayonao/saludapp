import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-generales',
  templateUrl: './card-generales.component.html',
  styleUrls: ['./card-generales.component.css'],
})
export class CardGeneralesComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Consideraciones generales';
  }

  ngOnInit(): void {}
}
