import { Component } from '@angular/core';
import { Iproducto } from './interfaces/Iproducto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss',
})
export class ProductosListComponent {

  sumarCantidad(producto: Iproducto):void {
   if(producto.cantidad < producto.stock)
    producto.cantidad++;
  }
  restarCantidad(producto: Iproducto):void {
    if(producto.cantidad>0)
    producto.cantidad--;
  }
productos: Array<Iproducto> = [
    
    {
      nombre: 'Pelota de basquet n° 5',
      tipo: 'Pelota',
      precio: 199,
      stock: 0,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:false,
      cantidad:0,
    },
    {
      nombre: 'Pelota de fútbol n° 3',
      tipo: 'Pelota',
      precio: 150,
      stock: 5,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:true,
      cantidad:0,
    },
    {
      nombre: 'Aro de basquet',
      tipo: 'Accesorios',
      precio: 250,
      stock: 9,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:false,
      cantidad:0,
    },
  ];
}