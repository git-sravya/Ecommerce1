import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginLogoutService {
  public notify = new BehaviorSubject<any>(false);
  notifyObservable$ = this.notify.asObservable();

  constructor() { }

  notifyOthers(data:any){
   if(data){
    this.notify.next(data);
   }
  }
}
