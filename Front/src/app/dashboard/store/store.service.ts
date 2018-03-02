import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../environments/environment';
@Injectable()
export class StoreService {
  data = [];
  dataTBS = [];
  constructor(private httpClient: HttpClient) {}

  products(){
    var config = {
      headers : {
        'Content-Type' : 'application/json'
      }
    }
    return this.httpClient.get(environment.apiUrl + 'usersProducts/getProducts')
   
}
 createuserProducts(name:string,price:Number,username:string,componentNo:Number){
   return this.httpClient.post(environment.apiUrl + 'usersProducts/createProduct/',{"name":name,"price":price,"username":username,"componentNo":componentNo});
 }
}