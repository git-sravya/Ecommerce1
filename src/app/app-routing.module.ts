import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { ProductComponent } from './product/product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewCartComponent } from './view-cart/view-cart.component';



const routes: Routes = [
  {path:'', redirectTo:'/sub-header',pathMatch:'full'},  
  {path:'sub-header',component:SubHeaderComponent},
  {path:'product',component:ProductComponent},
  { path: 'details/:productid', component: ViewProductComponent },
  { path: 'viewcart', component: ViewCartComponent },
  // {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
