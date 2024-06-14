import { Component, OnInit } from '@angular/core';
import { EcommService } from '../ecomm.service';
import { LoginLogoutService } from '../login-logout.service';
@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
 userId:any = localStorage.getItem('userId');
  id:any = parseInt(this.userId);
  cart:any[] = [];
  flag:boolean = false;

  constructor(private service:EcommService,private loginLogOut:LoginLogoutService ){
    service.Viewcart(this.id).subscribe((data)=>{
      console.log(data);
      this.cart=data;
       console.log(this.cart.length);
    })
  }

  ngOnInit(): void {
     console.log(localStorage.getItem('userId'));
      //added for header logo login status when visiting the viewcart page.
       this.checkLoginStatus();
   
    
  }

  private checkLoginStatus(){
    if(localStorage.getItem('userId')!==null){
      this.loginLogOut.notifyOthers({refresh:true});
      this.loginLogOut.notifyObservable$.subscribe((res) => {
        if(res.refresh) {
         this.flag = true;
        }
        else {
         this.flag = false;
        }
     })
     }
  }


}
