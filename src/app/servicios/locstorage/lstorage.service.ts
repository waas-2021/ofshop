import { Injectable } from '@angular/core';

import { Carrito } from 'src/app/interfaces/locstorage/carrito';
import { ProductoInterface } from 'src/app/interfaces/productos/producto-interface';

@Injectable({
  providedIn: 'root'
})
export class LstorageService {

  carrito: Carrito[] = []; 


  constructor( ){
    //var arreglo!: ProductoInterface = [];
    /*this.carrito.product= {};
    this.carrito.quantity=0;
    this.carrito.total=0;*/
    
  }

  getCarrito(){
    return this.carrito;
  }

  addCarrito(carro: Carrito){
    /*this.carrito.product.push( carro);
    this.carrito.quantity = this.carrito.product.length;
    var costo = 0;
    var costo=0;
    for(var i=0; i < this.carrito.product.length; i++){
      costo += this.carrito.product[i].price;
    }
    this.carrito.total=costo;*/

  
    this.carrito.push( carro);

    var costo=0;
    for(var i=0; i < this.carrito.length; i++){
      costo += this.carrito[i].subtotal;
    }

    var canasta = [{
      "cantidad": this.carrito.length,
      "productos": this.carrito,
      "total": costo,
    }];

    localStorage.setItem('carrito', JSON.stringify(canasta));
    console.log("LISTA: " + canasta);

  }

}
