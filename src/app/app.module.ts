import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable/datatable.component';
import { HttpClientModule } from '@angular/common/http';
import {MatExpansionModule} from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SchedularComponent } from './schedular/schedular.component';
import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';
import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonAllModule  } from '@syncfusion/ej2-angular-buttons';
import { CheckBoxAllModule } from '@syncfusion/ej2-angular-buttons';
import { ErrorComponent } from './error/error.component';

import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material";


@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    SchedularComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatExpansionModule,
    NoopAnimationsModule,
    DatePickerAllModule,
    TimePickerAllModule,
    DateTimePickerAllModule,
    NumericTextBoxAllModule,
    ScheduleAllModule,
    RecurrenceEditorAllModule,
     TreeViewModule ,
    DropDownListAllModule,
    MultiSelectAllModule,
    MaskedTextBoxModule,
    UploaderAllModule,
    ToolbarAllModule,
    ContextMenuAllModule,
    ButtonAllModule,
    CheckBoxAllModule,
    MatTabsModule,
        MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
