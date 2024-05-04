import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { AddToCartComponent } from './shared/components/add-to-cart/add-to-cart.component';

const routes: Routes = [
  {path:'', redirectTo:'Home', pathMatch:'full'},
  // {path:'**',redirectTo:'Home',pathMatch:'full'},
  { path: 'Home', component: HomeComponent },
  {path: 'product-detail/:id', component : ProductDetailsComponent},
  {path: 'addCard', component : AddToCartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
