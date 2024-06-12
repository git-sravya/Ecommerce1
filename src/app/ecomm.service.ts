import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EcommService {
  private url="http://localhost:3000/";

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private client:HttpClient) { }


  /*Sravya  */
  getAllProducts():Observable<any>
  {
    return this.client.get(this.url+"products/");
  }

  Addtocart(cart:any){
    return this.client.post(this.url+"carts/",JSON.stringify(cart),this.httpOptions);
  }

  updateCart(id:any,cart:any){
    return this.client.put(this.url+"carts/"+id,JSON.stringify(cart),this.httpOptions);
  }

  deleteProductFromCart(id:any){
    return this.client.delete(this.url+"carts/"+id);
  }
  GetCartforUser(id:any):Observable<any>
  {
   
    return this.client.get(this.url+`carts?userid=`+id);
  }
 
  Viewcart(id:any):Observable<any>
  {
   //var url1= "http://localhost:3000/carts?userId=1&_expand=product"
    return this.client.get(this.url+`carts?userid=${id}&_expand=product`);
  }

  GetProductById(id:any)
  {
    return this.client.get(this.url+"products/"+id);
  }
}
