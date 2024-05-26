import { Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent{


  //@Input()
  //productoChild: Iproducto;  

  @Input()
  quantity:number;

  @Input()
  max:number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxAlcanzado: EventEmitter<String> = new EventEmitter<String>();

  sumarCantidad():void {
    if(this.quantity < this.max){
    this.quantity++;
  this.quantityChange.emit(this.quantity);
    }else
      this.maxAlcanzado.emit("Se alcanzo el máximo");
  
   }
   restarCantidad():void {
     if(this.quantity>0)
     this.quantity--;
     this.quantityChange.emit(this.quantity);
   }
}
