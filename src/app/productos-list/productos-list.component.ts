import { Component } from '@angular/core';
import { Iproducto } from './interfaces/Iproducto';
import { CarritoService } from '../carrito.service';
import { ProductosDataService } from '../productos-data.service';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productos-list.component.html',
  styleUrl: './productos-list.component.scss',
})
export class ProductosListComponent {

  constructor(private carrito: CarritoService,
    private productoDataService: ProductosDataService) {
  }
  productos: Array<Iproducto> = [];

  ngOnInit(): void {
    this.productoDataService.getAll().subscribe(data => this.productos = data);
  }

  agregar(producto: Iproducto): void {
    this.carrito.agregarProductoCarrito(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }

  maxAlc(m: String) {
    alert(m);
  }






}