import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-left',
  templateUrl: './card-left.component.html',
  styleUrls: ['./card-left.component.css'],
})
export class CardLeftComponent implements OnInit {
  public titulo1: string;
  public detalle1: string;
  public nameBut1: string;
  public urlImg1: string;
  public titulo2: string;
  public detalle2: string;
  public nameBut2: string;
  public urlImg2: string;

  constructor() {
    this.titulo1 = 'CotizaCirugia';
    this.detalle1 =
      'Phasellus et sapien egestas, hendrerit odio ut, aliquam eros. Aenean felis nibh, venenatis vitae pellentesque at, commodo id purus. Mauris a felis eget sapien euismod placerat. In tempor iaculis diam vel vulputate. Donec ultricies tincidunt urna, in placerat lectus porttitor et. Nulla et pulvinar diam.';
    this.nameBut1 = 'Cotizar';
    this.urlImg1 = 'https://source.unsplash.com/Pd4lRfKo16U/1600x900';
    this.titulo2 = 'Medico en Casa';
    this.detalle2 =
      'Phasellus et sapien egestas, hendrerit odio ut, aliquam eros. Aenean felis nibh, venenatis vitae pellentesque at, commodo id purus. Mauris a felis eget sapien euismod placerat. In tempor iaculis diam vel vulputate. Donec ultricies tincidunt urna, in placerat lectus porttitor et. Nulla et pulvinar diam.';
    this.nameBut2 = 'Solicitar';
    this.urlImg2 = 'https://source.unsplash.com/UB0v9jJELds/1600x900';
  }

  ngOnInit(): void {}
}
