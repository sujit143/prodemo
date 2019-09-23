import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { User } from './user';
import { UserdispService } from '../userdisp.service';

@Component({
  selector: 'app-userdisplay',
  templateUrl: './userdisplay.component.html',
  styleUrls: ['./userdisplay.component.css']
})
export class UserdisplayComponent implements OnInit {
 // dataSource:User[];

 //dataSource = new MatTableDataSource(User[]);
// dataSource =  MatTableDataSource<User>;


 //arr:User[]=[];
 //dataSource = new MatTableDataSource;

 //dataSource = new MatTableDataSource<User>(this.dataSource);

 displayedColumns: string[] = ['id', 'name'];

 dataSource:MatTableDataSource<User>;
 @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

 constructor(private _data:UserdispService) {


   this._data.getAllPrac().subscribe(
     (data:User[])=>{
       //this.dataSource=data;

       this.dataSource=new MatTableDataSource(data);
this.dataSource.paginator=this.paginator;
       //this.dataSource.paginator = this.paginator;
     }
   );
  }
   ngOnInit() {

  }

//  applyFilter(filterValue: string) {
//    this.dataSource.filter = filterValue.trim().toLowerCase();
//  }

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  if (this.dataSource.paginator) {
  this.dataSource.paginator.firstPage();
  }
}
 }

