import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public saludo: string;
  public message: string;

  constructor() {
    this.saludo = 'Bienvenidos a SaludApp!';
    this.message = 'Tu salud a un clic';
  }

  ngOnInit(): void {}
}
