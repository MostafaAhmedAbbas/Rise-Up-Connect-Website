import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
@Component({
  selector: 'app-my-items',
   template: `<input #search class="search" style="backgroung:white" type="text"(keydown.enter)="onSearch(search.value)" placeholder="Search...">
   <ng2-smart-table [settings]="settings" [source]="source" (deleteConfirm)="onDeleteConfirm($event)"></ng2-smart-table>`
,
  styleUrls: ['./my-items.component.scss']
})
export class MyItemsComponent implements OnInit {
  source: LocalDataSource;
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    // ... other rows here
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  settings = {
    delete:{
      confirmDelete:true,
    },
    columns: {
      id: {
        title: 'ID',
        filter:false
      },
      name: {
        title: 'Full Name',
        filter:false
      },
      username: {
        title: 'User Name',
        filter:false
      },
      email: {
        title: 'Email',
        filter:false
      }
    }
  };
  constructor() { this.source = new LocalDataSource(this.data);}

  ngOnInit() {
  }
  onDelete(event){
console.log("delete");

  }
  onDeleteConfirm(event):void{
    console.log(event.data); 
    if(window.confirm("Are you sure you want to delete this item mother fucker !!")){
      event.confirm.resolve();
    }
  }
  onSearch(query: string = '') {
    this.source.setFilter([
      {
        field: 'id',
        search: query
      },
      {
        field: 'name',
        search: query
      },
      {
        field: 'username',
        search: query
      },
      {
        field: 'email',
        search: query
      }
    ], false); 
    
  }
}
