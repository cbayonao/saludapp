import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-right',
  templateUrl: './card-right.component.html',
  styleUrls: ['./card-right.component.css'],
})
export class CardRightComponent implements OnInit {
  public titulo1: string;
  public detalle1: string;
  public nameBut1: string;
  public urlImg1: string;
  public titulo2: string;
  public detalle2: string;
  public nameBut2: string;
  public urlImg2: string;

  constructor() {
    this.titulo1 = 'Agenda tu cita!';
    this.detalle1 =
      'Phasellus et sapien egestas, hendrerit odio ut, aliquam eros. Aenean felis nibh, venenatis vitae pellentesque at, commodo id purus. Mauris a felis eget sapien euismod placerat. In tempor iaculis diam vel vulputate. Donec ultricies tincidunt urna, in placerat lectus porttitor et. Nulla et pulvinar diam.';
    this.nameBut1 = 'Agendar';
    this.urlImg1 = 'https://source.unsplash.com/hIgeoQjS_iE/1600x900';
    this.titulo2 = 'Directorio Medico';
    this.detalle2 =
      'Phasellus et sapien egestas, hendrerit odio ut, aliquam eros. Aenean felis nibh, venenatis vitae pellentesque at, commodo id purus. Mauris a felis eget sapien euismod placerat. In tempor iaculis diam vel vulputate. Donec ultricies tincidunt urna, in placerat lectus porttitor et. Nulla et pulvinar diam.';
    this.nameBut2 = 'Buscar medico';
    this.urlImg2 = 'https://source.unsplash.com/afW1hht0NSs/1600x900';
  }

  ngOnInit(): void {}
}
