import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule}  from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PaginaPrincipalComponent } from './componentes/pagina-principal/pagina-principal.component';
import { PaginaNoEncontradaComponent } from './componentes/pagina-no-encontrada/pagina-no-encontrada.component';
import { PaginaBusquedaProductosComponent } from './componentes/pagina-busqueda-productos/pagina-busqueda-productos.component';

import { BusquedaProductosServicioService } from './servicios/productos/busqueda-productos-servicio.service';
import { PaginaProductoComponent } from './componentes/pagina-producto/pagina-producto.component';
import { PaginaLoginComponent } from './componentes/pagina-login/pagina-login.component';
import { PaginaContactoComponent } from './componentes/pagina-contacto/pagina-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    PaginaNoEncontradaComponent,
    PaginaBusquedaProductosComponent,
    PaginaProductoComponent,
    PaginaLoginComponent,
    PaginaContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BusquedaProductosServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
