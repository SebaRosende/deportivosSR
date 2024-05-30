import { Component } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Iproducto } from '../productos-list/interfaces/Iproducto';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrl: './carrito-list.component.scss'
})
export class CarritoListComponent {

  listaCarrito: Iproducto[]=[];

  constructor(private carrito: CarritoService){
    carrito.lista.subscribe(c=>this.listaCarrito = c);

  }

}
