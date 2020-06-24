import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css'],
})
export class MainFooterComponent implements OnInit {
  public myFooter: string;

  constructor() {
    this.myFooter = '© SaludApp Todos los derechos reservados';
  }

  ngOnInit(): void {}
}
