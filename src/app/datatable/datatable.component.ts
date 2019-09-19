import { Component, OnInit } from '@angular/core';
import { Practice } from './practice';
import { DataService } from './data.service';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  //arr: Practice[] = [];

  array: Practice[] = [];


  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getAllPractices().subscribe(
      (data: Practice[]) => {
          this.array = data;
      }
  );
   console.log('ARRAY:',this.array);

  }

}

