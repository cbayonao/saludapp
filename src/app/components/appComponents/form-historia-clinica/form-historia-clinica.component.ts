import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-historia-clinica',
  templateUrl: './form-historia-clinica.component.html',
  styleUrls: ['./form-historia-clinica.component.css'],
})
export class FormHistoriaClinicaComponent implements OnInit {
  public titulo: string;
  public id: string;
  public placeHol: string;

  constructor() {
    this.titulo = 'Adjunta tu historia clinica';
    this.id = 'historia-clinica';
    this.placeHol = 'Historia Clinica';
  }

  ngOnInit(): void {}
}
