import { Injectable } from '@angular/core';
import { Iproducto } from '../productos-list/interfaces/Iproducto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CarritoService {

  private _lista: Iproducto[]=[];
  
  lista: BehaviorSubject <Iproducto[]> = new BehaviorSubject(this._lista);
  
  constructor() { }
  

  agregarProductoCarrito(producto: Iproducto) {  

    let item = this._lista.find((p1) => p1.nombre == producto.nombre);

    if (!item){
      this._lista.push({...producto});
      //clona el objeto
    }else{

      item.cantidad += producto.cantidad;
    }
   
    console.log(this._lista);  
    this.lista.next(this._lista); //equivale al emmit de eventos

  }

  
}
