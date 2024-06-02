import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeportivosrProductosComponent } from './deportivosr-productos/deportivosr-productos.component';
import { DeportivosrAcercaDeComponent } from './deportivosr-acerca-de/deportivosr-acerca-de.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch:'full',
  },
  {
  
  path: 'productos',
  component: DeportivosrProductosComponent,
},
{
  path: 'acercaDe',
  component: DeportivosrAcercaDeComponent,
},
{
  path: 'contacto',
  component: ContactoComponent,
}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
