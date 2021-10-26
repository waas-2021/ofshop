import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component'
import { PaginaBusquedaProductosComponent } from './componentes/pagina-busqueda-productos/pagina-busqueda-productos.component';
import { PaginaProductoComponent } from './componentes/pagina-producto/pagina-producto.component';

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'busqueda', component: PaginaBusquedaProductosComponent },
  { path: 'producto/:id', component: PaginaProductoComponent },
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
