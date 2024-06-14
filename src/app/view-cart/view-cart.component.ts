import { Component } from '@angular/core';
import { EcommService } from '../ecomm.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {
 userId:any = localStorage.getItem('userId');
  id:any = parseInt(this.userId);

  cart:any;

  constructor(private service:EcommService){
    service.Viewcart(this.id).subscribe((data)=>{
      console.log(data);
      this.cart=data;
    })
  }


}
