import {  Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { LoginLogoutService } from '../login-logout.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  flag:boolean = false;

 
 constructor(private router:Router,private loginLogOut:LoginLogoutService){

  
  

 }

 ngOnInit(): void {
  /*   if(localStorage.getItem('userId') === null){
    this.flag = true;
   
   } */
   /* else {
    this.flag = false;
    
   }  */
    this.loginLogOut.notifyObservable$.subscribe((res) => {
      if(res.refresh) {
       this.flag = true;
      }
      else {
       this.flag = false;
      }
   })
  
 }

 logout(){
   this.flag = false;
  localStorage.clear();
  //this.ngOnInit();
  console.log(localStorage.getItem('userId'));
  this.router.navigate(['/sub-header']); 
  //window.location.reload();
 
 

 }

 login(){
  
  this.router.navigate(['login']);
 }

}
