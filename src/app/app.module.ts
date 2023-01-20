import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {ContactFormComponent} from './components/contact/contact-form/contact-form.component'
import {ReactiveFormsModule} from '@angular/forms';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogDataComponent} from './components/contact/dialog-data/dialog-data.component';
import {ProductListComponent} from './components/product/product-list/product-list.component';
import {ProductItemComponent} from './components/product/product-item/product-item.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {UserListComponent} from './components/user/user-list/user-list.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {OrderListComponent} from './components/order/order-list/order-list.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ColumnHeaderPipe} from './pipes/column-header.pipe';
import {UserDetailsComponent} from './components/user/user-details/user-details.component';
import { ProductDetailsComponent } from './components/product/product-details/product-details.component';


@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        ContactFormComponent,
        DialogDataComponent,
        ProductListComponent,
        ProductItemComponent,
        HomeComponent,
        UserListComponent,
        OrderListComponent,
        ColumnHeaderPipe,
        UserDetailsComponent,
        ProductDetailsComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatCardModule,
        MatMenuModule,
        MatIconModule,
        MatButtonModule,
        LayoutModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
