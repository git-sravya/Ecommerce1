import { Component } from '@angular/core';
import { EcommService } from '../ecomm.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
 
  cart:any;
  product:any={};
  constructor(private service:EcommService,router:ActivatedRoute){
    service.GetProductById(router.snapshot.params['productid']).subscribe((data)=>{
      console.log(data);
      this.product=data;
    })
  }
  
  Addtocart(id:any){
    var c1:any={}
    var flag=0;
    var result= this.service.GetCartforUser(1).subscribe((data)=>{    
       
        this.cart=data;     
        this.cart.forEach((item:any) => {
         
          if(item.productId==id)
            {
             
              flag=1;
              item.quantity=item.quantity+1; 
              this.service.updateCart(item.id,item).subscribe(x=>{
                //console.log(x);
              });            
            }
        });        
           if(flag==0)
            {              
              c1.productId=id;
              c1.quantity=1;
              c1.userid=1;
              this.service.Addtocart(c1).subscribe(x=>{
                console.log(x);
              });
                 
            }   
          
      }
    )  

  }

  Removefromcart(id:any){
    var flag=0;
    var result= this.service.GetCartforUser(1).subscribe((data)=>{ 
      console.log(data)
      this.cart=data;     
      this.cart.forEach((item:any,index:any) => {
        console.log(item)
        if(item.productId==id)
          {
           
            flag=1;
            if(item.quantity>1)
              {
              item.quantity= item.quantity-1;
              this.service.updateCart(1,item).subscribe(x=>{
              console.log(item);
            });  
          }
           if(item.quantity==1)
            {              
              this.service.deleteProductFromCart(item.id).subscribe(x=>{
                
              });
            }                 
              
          }
      });        
                  
        
    }
  )  

  }

  }
   
    





  