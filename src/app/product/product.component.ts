import { Component } from '@angular/core';
import { EcommService } from '../ecomm.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  Products:any[]=[];
  cart:any;
  product:any={};
  constructor(private service:EcommService){
    service.getAllProducts().subscribe((data)=>{
      console.log(data);
      this.Products=data;
    })
  }

  Addtocart(id:any){
    var result= this.service.GetCartforUser(1).subscribe({
      next:(data)=>{
        this.cart=data;
        
        var index=this.cart.products.findIndex((x:any)=>{
             return x.productId==id;              
           })
           if(index>=0)
            {
              this.cart.products[index].quantity=this.cart.products[index].quantity+1;
              
            
            }
            else
            {
              this.product.productId=id;
              this.product.quantity=1;
              this.cart.products.push(this.product);          
            }
            this.service.Addtocart(1,this.cart).subscribe(x=>{
              //console.log(x);
            });
          
      }
    })
      

  }

  Removefromcart(id:any){
    var result= this.service.GetCartforUser(1).subscribe({
      next:(data)=>{
        this.cart=data;
        
        var index=this.cart.products.findIndex((x:any)=>{
             return x.productId==id;              
           })
           if( this.cart.products[index].quantity>1)
            {
              this.cart.products[index].quantity=this.cart.products[index].quantity-1;
                 
            }
            else
            {              
              this.cart.products.splice(index,1);         
              
            }
            this.service.Addtocart(1,this.cart).subscribe(x=>{
              //console.log(x);
            });
          
      }
    })  

  }

}
