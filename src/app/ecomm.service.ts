import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommService {
  private url="http://localhost:3000/products/";
  private url1="http://localhost:3001/carts/";
  private url2="http://localhost:3002/users/";
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private client:HttpClient) { }

  getAllProducts():Observable<any>
  {
    return this.client.get(this.url);
  }

  Addtocart(id:any,cart:any){
    return this.client.put(this.url1+id,JSON.stringify(cart),this.httpOptions);
  }
 
}
