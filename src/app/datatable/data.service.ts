import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = 'https://f615b77e.ngrok.io/api/Schedular/GetScheduleappointmentMatcingPatients?FirstName=abc';

  constructor(private http: HttpClient) { }

  getAllPractices() {
    return this.http.get(this.url);
  }
}
