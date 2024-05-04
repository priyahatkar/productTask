import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CarousoleComponent } from './shared/components/carousole/carousole.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './shared/components/home/home.component';
import { BestsalerComponent } from './shared/components/bestsaler/bestsaler.component';
import { GelleryComponent } from './shared/components/gellery/gellery.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AddToCartComponent } from './shared/components/add-to-cart/add-to-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarousoleComponent,
    FooterComponent,
    HomeComponent,
    BestsalerComponent,
    GelleryComponent,
    ProductDetailsComponent,
    AddToCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
