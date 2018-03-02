import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { StoreService } from './store.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})

export class StoreComponent implements OnInit {

  settings = {
    columns: {
      name: {
        title: 'Product Name'
      },
      price: {
        title: 'Price'
      },
      createdAt: {
        title: 'Created at'
      },
      updatedAt: {
        title: 'Updated at'
      },
      sellername:{
        title:'Seller'
      },
      componentNo : {
        title:'Component'
      },
        actions:{
          edit:false,
          delete :false
        }
    }
  };


  products;

  constructor(private storeService: StoreService) { 
  }
  
  ngOnInit() {
  this.storeService.products().subscribe(
        (res:any)=>{ 
          this.products = res.data;  
  }

  )
}
onCreateConfirm(event){
        console.log(event.newData);
        event.confirm.resolve(event.newData);
        this.ItemsService.createuserProducts(event.newData.name,event.newData.price,window.sessionStorage.username,event.newData.componentNo).subscribe();
      }
}