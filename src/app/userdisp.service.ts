import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdispService {

  url: string = 'https://fe2e9834.ngrok.io/api/Speciality/GetSpecialities';

  constructor(private http: HttpClient) { }

  getAllPrac() {
    return this.http.get(this.url);
  }
}
