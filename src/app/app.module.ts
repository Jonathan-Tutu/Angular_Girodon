import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { ContactFormComponent } from './components/contact-form/contact-form.component'
import { ReactiveFormsModule} from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogDataComponent } from './components/dialog-data/dialog-data.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home-component/home-component.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContactFormComponent,
    DialogDataComponent,
    ProductListComponent,
    ProductItemComponent,
    HomeComponent,
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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
