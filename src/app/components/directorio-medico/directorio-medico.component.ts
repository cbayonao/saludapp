import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directorio-medico',
  templateUrl: './directorio-medico.component.html',
  styleUrls: ['./directorio-medico.component.css'],
})
export class DirectorioMedicoComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Directorio Medico';
  }

  ngOnInit(): void {}
}
