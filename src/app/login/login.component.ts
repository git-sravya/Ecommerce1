import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {LoginLogoutService} from '../login-logout.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   users:any;
   flag:boolean = false;
   error:string = 'Hello';
  constructor(private http:HttpClient, private router:Router,private loginLogout:LoginLogoutService){
    
  }

  
  onSubmitHandler(form:any){
    console.log('Hello');
    //console.log(form.value);
   // this.http.get(``)
    this.http.get('http://localhost:3000/users')
    .subscribe({
      next:(response:any) => {
       this.users = response;
      
       this.users.forEach(
        (user:any) => {
          //console.log(form.value.email);
          if((form.value.email == user.email) && (form.value.password == user.password)){
            this.flag = true;
            this.loginLogout.notifyOthers({refresh:true});
            localStorage.setItem('userId',user.id);
            this.router.navigate(['product']);
          }

         
        }
      );
      if(this.flag == false){
       
          
          console.log('hii'); 
          this.error = 'Invalid Credentials';

      }
    
      }

    })
  
  }



}
