import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducto } from './productos-list/interfaces/Iproducto';

const URL= "https://demo7067008.mockable.io/productos";

@Injectable({
  providedIn: 'root'
})
export class ProductosDataService {

  constructor(private http: HttpClient) { }

public getAll(): Observable<Iproducto[]> {
//consumir la api
return this.http.get<Iproducto[]>(URL);

}

}
