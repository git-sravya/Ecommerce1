import { Component } from '@angular/core';
import { EcommService } from '../ecomm.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Products:any[]=[];
  cart:any={};
  product:any={};
  constructor(private service:EcommService){
    service.getAllProducts().subscribe((data)=>{
      console.log(data);
      this.Products=data;
    })
  }

  Addtocart(id:any){

    this.product.id=id;

    this.cart.id=1;
    this.cart.userId=1;
    this.cart.date=new Date();
    var p=this.Products.find(p=>{return p.id===id});
    if(p!=null)
      {
        p.quantity=p.quantity+1;
        this.cart.products.push(p);
      }
      else
      {
        p.productId=id;
        p.quantity=1;
        this.cart.products.push(p);
      }

    


    

  }
}
