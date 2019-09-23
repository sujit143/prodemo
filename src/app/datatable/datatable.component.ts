import { Component, OnInit, ViewChild } from '@angular/core';
import { Practice } from './practice';
import { DataService } from './data.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  //arr: Practice[] = [];

  array: Practice[] = [];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.array.paginator = this.paginator;


    this.data.getAllPractices().subscribe(
      (data: Practice[]) => {
          this.array = data;
      }
  );
   console.log('ARRAY:',this.array);

  }

}

