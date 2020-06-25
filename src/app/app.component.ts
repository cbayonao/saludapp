import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';
import { Data } from './models/data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  data: Data[] = [];
  title = 'saludApp2';
  links = [
    { path: '/home', icon: 'landing', label: 'landing' },
    { path: '/agenda', icon: 'agenda', label: 'agenda' },
    {
      path: '/directoriomedico',
      icon: 'directoriomedico',
      label: 'directoriomedico',
    },
    { path: '/cotizacirugia', icon: 'cotizacirugia', label: 'cotizacirugia' },
    { path: '/medicoencasa', icon: 'medicoencasa', label: 'medicoencasa' },
  ];
  constructor(public dataService: DataService) {}
  ngOnInit() {
    this.dataService.getData().subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      },
      (err) => console.log(err)
    );
  }
}
