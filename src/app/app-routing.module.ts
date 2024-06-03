import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


const routes: Routes = [
  {path:'', redirectTo:'/sub-header',pathMatch:'full'},  
  {path:'sub-header',component:SubHeaderComponent},
  {path:'product',component:ProductComponent},
  // {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
