import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://54c99934.ngrok.io/api/Speciality/GetSpecialities';

  constructor(private http: HttpClient) { }

  getAllPractices() {
    return this.http.get(this.url);
  }
}
