import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../models/data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // Pendiente crear api en firebase
  getData() {
    return this.http.get<Data[]>(
      'https://us-central1-cbo-dev-api.cloudfunctions.net/myapi'
    );
  }
}
