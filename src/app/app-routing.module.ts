import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './components/home-component/home-component.component';
import { UserListComponent } from "./components/user-list/user-list.component";
import { OrderListComponent } from "./components/order-list/order-list.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact-form', component: ContactFormComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
