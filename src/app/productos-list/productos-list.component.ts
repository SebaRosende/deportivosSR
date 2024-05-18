import { Component } from '@angular/core';
import { Iproducto } from './interfaces/Iproducto';

@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss',
})
export class ProductosListComponent {
  producto: Array<Iproducto> = [
    
    {
      nombre: 'Pelota de basquet n° 5',
      tipo: 'Pelota',
      precio: 199,
      stock: 50,
    },
    {
      nombre: 'Pelota de fútbol n° 3',
      tipo: 'Pelota',
      precio: 150,
      stock: 40,
    },
    {
      nombre: 'Aro de basquet',
      tipo: 'Accesorios',
      precio: 250,
      stock: 10,
    },
  ];
}