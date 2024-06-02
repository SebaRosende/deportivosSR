import { Component } from '@angular/core';
import { CarritoService } from '../servicios/carrito.service';
import { Iproducto } from '../productos-list/interfaces/Iproducto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.scss'
})
export class CarritoListComponent {

  listaCarrito$: Observable <Iproducto[]>;

  constructor(private carrito: CarritoService){
    this.listaCarrito$ = carrito.lista.asObservable();


 //   carrito.lista.subscribe(c=>this.listaCarrito = c);

  }

}
