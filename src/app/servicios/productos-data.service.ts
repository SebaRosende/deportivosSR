import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Iproducto } from '../productos-list/interfaces/Iproducto';

const URL= "https://demo7067008.mockable.io/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http: HttpClient) { }

public getAll(): Observable<Iproducto[]> {
//consumir la api

return this.http.get<Iproducto[]>(URL).pipe(
  tap((productos : Iproducto[]) => productos.forEach(producto => producto.cantidad=0))

);

}

}

//tap transforma datos de entrada