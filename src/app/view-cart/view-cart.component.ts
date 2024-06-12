import { Component } from '@angular/core';
import { EcommService } from '../ecomm.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {


  cart:any;

  constructor(private service:EcommService){
    service.Viewcart(1).subscribe((data)=>{
      console.log(data);
      this.cart=data;
    })
  }


}
