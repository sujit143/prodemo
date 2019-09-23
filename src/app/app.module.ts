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
import { MatToolbarModule, MatTableModule } from "@angular/material";
// import { ToastComponent } from './toast/toast.component';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { ReactiveComponent } from './reactive/reactive.component';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatPaginatorModule} from '@angular/material/paginator';
import { PaginatorComponent } from './paginator/paginator.component';



@NgModule({
  declarations: [
    AppComponent,
    DatatableComponent,
    SchedularComponent,
    ErrorComponent,
    // ToastComponent,
    ReactiveComponent,
    PaginatorComponent

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
        MatToolbarModule,
        ToastModule,
        GridAllModule,
        ToolbarModule,
        DialogModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule,
        CommonModule,
        MatPaginatorModule,
        MatTableModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
