import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateService {
  // tslint:disable-next-line: max-line-length
  urlsche: string = 'https://90b5e00b.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView=\'day\'&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81';
  // tslint:disable-next-line: max-line-length
  urlscheduleId: string = 'https://90b5e00b.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView=\'day\'&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81';


  constructor(private _http:HttpClient) { }

  getschedule(){
    return this._http.get(this.urlsche);
  }

  getschedulebyDate(AppointmentDate) {
    // tslint:disable-next-line: max-line-length
    return this._http.get(this.urlscheduleId +AppointmentDate +"&AppointmentToDate=&SchedulerView=" + "day" +"&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81" );
}
}
