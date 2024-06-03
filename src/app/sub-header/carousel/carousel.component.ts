import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  url:string = 'https://fakestoreapi.com/products';
  items:any;
  menProducts:any;
  womenProducts:any;

  constructor(private http:HttpClient){
    
  }
  ngOnInit(): void {
  this.http.get(this.url)
  .subscribe({
    next:(res) =>{
      console.log(res);
       this.items = res;
       this.menProducts = this.items.slice(0,4);
       this.womenProducts = this.items.slice(4,8);
       
    },
    error:()=>{

    },
    complete:() => {
      
    }
  })
  }

}
