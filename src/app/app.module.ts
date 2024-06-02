import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosListComponent } from './productos-list/productos-list.component';
import { CarritoListComponent } from './carrito-list/carrito-list.component';
import { DeportivosrProductosComponent } from './deportivosr-productos/deportivosr-productos.component';
import { DeportivosrAcercaDeComponent } from './deportivosr-acerca-de/deportivosr-acerca-de.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import { HttpClientModule } from '@angular/common/http';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosListComponent,
    CarritoListComponent,
    DeportivosrProductosComponent,
    DeportivosrAcercaDeComponent,
    InputIntegerComponent,
    ContactoComponent  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
