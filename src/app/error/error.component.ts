import { Component, OnInit, ViewEncapsulation, ViewChild, Input } from '@angular/core';
import {
    EventRenderedArgs, ScheduleComponent, MonthService,
    DayService, WeekService, WorkWeekService, EventSettingsModel, ResizeService,
    DragAndDropService,
    GroupModel
} from '@syncfusion/ej2-angular-schedule';
import { Schedule } from './schedule';
import { DateService } from '../date.service';
import { ChangeEventArgs } from '@syncfusion/ej2-buttons';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  providers: [MonthService, DayService, WeekService, WorkWeekService, ResizeService, DragAndDropService],
  encapsulation: ViewEncapsulation.None,
})
export class ErrorComponent implements OnInit {
  @ViewChild('scheduleObj', { static: false })
  @Input() formValue: any;


  selectedIndextab = 0;
  public allowMultiple: Boolean = true;
  selectedIndex: number = 0;
  schedule: boolean = false;
  sche: Schedule[] = [];
  arrsche: Schedule[] = [];
  public group: GroupModel = { byGroupID: false, resources: ['Projects', 'Categories'] };
  public scheduleObj: ScheduleComponent;



  public data: object[] = [{
      appointmentId: 2,
      title: 'Paris',
      start: new Date(2018, 1, 15, 10, 0),
      end: new Date(2018, 1, 15, 12, 30),
      isMedicalClearanceDone: false,
      Source: 'London',
      Comments: 'Summer vacation planned for outstation.',
      startdatetime: 'Asia/Yekaterinburg',
      enddatetime: 'Asia/Yekaterinburg',
      providerName: 'Dr Capiola David',
      PracticeListId: 81,
      appointmentColor: '#009900',
      appointmentType: 'Initial Evaluation'

  }];

  public temp: string = '<div class="tooltip-wrap">' +
  //'<div class="image ${EventType}"></div>' +
  '<div class="content-area"><div class="name">${title}</></div>' +
  '<div class="city">${providerName}</div>' +
  '<div class="time">From&nbsp;:&nbsp;${startdatetime} </div>' +
  '<div class="time">To&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;${enddatetime} </div></div></div>';


  public eventSettings: EventSettingsModel = {dataSource: this.data,enableTooltip: true, tooltipTemplate: this.temp};

  public selectedDate: Date = new Date();
  public showQuickInfo: boolean = false;
  public statusFields: Object = { text: 'StatusText', value: 'StatusText' };
  public StatusData: Object[] = [
      { StatusText: 'New', Id: 1 },
      { StatusText: 'Requested', Id: 2 },
      { StatusText: 'Confirmed', Id: 3 }
  ];
  public dateParser(data: string) {
      return new Date(data);
  }
  public onEventRendered(args: EventRenderedArgs): void {
      switch (args.data.EventType) {
          case 'Requested':
              (args.element as HTMLElement).style.backgroundColor = '#F57F17';
              break;
          case 'Confirmed':
              (args.element as HTMLElement).style.backgroundColor = '#7fa900';
              break;
          case 'New':
              (args.element as HTMLElement).style.backgroundColor = '#8e24aa';
              break;
      }
  }
  public onActionBegin(args: { [key: string]: Object }): void {
      if (args.requestType === 'eventCreate' || args.requestType === 'eventChange') {
          let data: any;
          if (args.requestType === 'eventCreate') {
              data = <any>args.data[0];
          } else if (args.requestType === 'eventChange') {
              data = <any>args.data;
          }
          if (!this.scheduleObj.isSlotAvailable(data.StartTime as Date, data.EndTime as Date)) {
              args.cancel = true;
          }
      }
  }

  onChange(args: ChangeEventArgs): void {
    if (args.checked) {
        this.scheduleObj.eventSettings.enableTooltip = true;
    } else {
        this.scheduleObj.eventSettings.enableTooltip = false;
    }
    this.scheduleObj.dataBind();
}

onTemplateChange(args: ChangeEventArgs): void {
    if (args.checked) {
        this.scheduleObj.eventSettings.tooltipTemplate = this.temp;
    } else {
        this.scheduleObj.eventSettings.tooltipTemplate = null;
    }
    this.scheduleObj.dataBind();
}

  constructor(private _data: DateService) { }

  ngOnInit() {

      this._data.getschedule().subscribe(
          (data: any) => {
              this.sche = data["schedulerAppointments"];
              this.arrsche = this.sche;
              console.log(this.sche);
              this.data = this.sche
              this.eventSettings = {
                  dataSource: this.data,
                  fields: {
                      id: 'appointmentId',
                      subject: { name: 'title' },
                      isAllDay: { name: 'isMedicalClearanceDone' },
                      location: { name: 'caseNumber' },
                      description: { name: 'providerName' },
                      startTime: { name: 'start' },
                      endTime: { name: 'end' },
                      startTimezone: { name: 'startdatetime' },
                      endTimezone: { name: 'enddatetime' }
                  }
              };
          }
      );

      this._data.getschedulebyDate(this.formValue.toString()).subscribe(
          (data: any) => {
              this.sche = data["schedulerAppointments"];
              this.arrsche = this.sche;
              console.log("syncfusiondata:", this.sche);
              this.data = this.sche
              this.eventSettings = {
                  dataSource: this.data,
                  fields: {
                      id: 'appointmentId',
                      subject: { name: 'title' },
                      isAllDay: { name: 'isMedicalClearanceDone' },
                      location: { name: 'caseNumber' },
                      description: { name: 'providerName' },
                      startTime: { name: 'start' },
                      endTime: { name: 'end' },
                      startTimezone: { name: 'startdatetime' },
                      endTimezone: { name: 'enddatetime' }
                  }
              };

          }
      );
      console.log("The Appointmrnt date is:", this.formValue);
      console.log("The scheduler date is:", this.selectedDate);
  }

}
