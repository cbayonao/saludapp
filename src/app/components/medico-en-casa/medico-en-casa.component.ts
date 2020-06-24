import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico-en-casa',
  templateUrl: './medico-en-casa.component.html',
  styleUrls: ['./medico-en-casa.component.css'],
})
export class MedicoEnCasaComponent implements OnInit {
  public titulo: string;
  public nameBut: string;

  constructor() {
    this.titulo = 'Médico en casa';
    this.nameBut = 'Solicitar médico';
  }

  ngOnInit(): void {}
}
