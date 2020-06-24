import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-especiales',
  templateUrl: './card-especiales.component.html',
  styleUrls: ['./card-especiales.component.css'],
})
export class CardEspecialesComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Consideraciones especiales';
  }

  ngOnInit(): void {}
}
