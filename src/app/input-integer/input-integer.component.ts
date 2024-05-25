import { Component, Input} from '@angular/core';
import { Iproducto } from '../productos-list/interfaces/Iproducto';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent{


  @Input()
  producto: Iproducto;  

  sumarCantidad(producto: Iproducto):void {
    if(producto.cantidad < producto.stock)
     producto.cantidad++;
   }
   restarCantidad(producto: Iproducto):void {
     if(producto.cantidad>0)
     producto.cantidad--;
   }
}
