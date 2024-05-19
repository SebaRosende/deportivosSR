import { Component } from '@angular/core';
import { Iproducto } from './interfaces/Iproducto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss',
})
export class ProductosListComponent {
  productos: Array<Iproducto> = [
    
    {
      nombre: 'Pelota de basquet n° 5',
      tipo: 'Pelota',
      precio: 199,
      stock: 0,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:false,
    },
    {
      nombre: 'Pelota de fútbol n° 3',
      tipo: 'Pelota',
      precio: 150,
      stock: 40,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:true,
    },
    {
      nombre: 'Aro de basquet',
      tipo: 'Accesorios',
      precio: 250,
      stock: 10,
      image:"assets/imagenes/pelotaBasquet.png",
      oferta:false,
    },
  ];
}