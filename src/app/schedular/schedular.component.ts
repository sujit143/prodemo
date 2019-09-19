import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService }
    from '@syncfusion/ej2-angular-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';

@Component({
  selector: 'app-schedular',
  templateUrl: './schedular.component.html',
  styleUrls: ['./schedular.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService]
})
export class SchedularComponent implements OnInit {

  public selectedDate: Date = new Date(2017, 5, 5);
  public currentView: View = 'Week';
  public readonly: boolean = true;
  private dataManger: DataManager = new DataManager({
      url: 'https://98cd4d7a.ngrok.io/api/Patient/GetAppointmentsSchedulerDataBeta?LocationListId=&ProviderListId=&SpecialityList=&AppointmentDate=2019/08/30&AppointmentToDate=2019/08/30&SchedulerView=%27day%27&CategorySpecialityId=&SpecialityId=&AppointmentRequestId=&MemberId=1114&PracticeListId=81',
      adaptor: new WebApiAdaptor,
      crossDomain: true
  });
  public eventSettings: EventSettingsModel = { dataSource: this.dataManger };

  constructor() { }

  ngOnInit() {
    console.log(this.dataManger);
  }

}
