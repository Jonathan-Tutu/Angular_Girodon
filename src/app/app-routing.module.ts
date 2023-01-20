import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactFormComponent} from './components/contact/contact-form/contact-form.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {HomeComponent} from './components/home/home.component';
import {UserListComponent} from "./components/user/user-list/user-list.component";
import {OrderListComponent} from "./components/order/order-list/order-list.component";
import {UserDetailsComponent} from "./components/user/user-details/user-details.component";
import {ProductDetailsComponent} from "./components/product/product-details/product-details.component";


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'contact', component: ContactFormComponent},
    {path: 'products', component: ProductListComponent},
    {path: 'product/:id', component: ProductDetailsComponent},
    {path: 'users', component: UserListComponent},
    {path: 'user/:id', component: UserDetailsComponent},
    {path: 'orders', component: OrderListComponent},
    {path: '**', component: HomeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
