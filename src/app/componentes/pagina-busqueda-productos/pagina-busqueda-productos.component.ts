import { Component, OnInit } from '@angular/core';

import { BusquedaProductosServicioService } from 'src/app/servicios/productos/busqueda-productos-servicio.service';

import { ProductosInterface } from 'src/app/interfaces/productos/productos-interface';

import { BusquedaProductosModel } from 'src/app/clases/productos/busqueda-productos-model';

import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-pagina-busqueda-productos',
  templateUrl: './pagina-busqueda-productos.component.html',
  styleUrls: ['./pagina-busqueda-productos.component.css']
})
export class PaginaBusquedaProductosComponent implements OnInit {

  resultadoBsk!: ProductosInterface;
  cargandoBand: boolean = false;
  bskModel = new BusquedaProductosModel('','');

  constructor( private bsqServicio: BusquedaProductosServicioService,  private appcomp: AppComponent ){}

  ngOnInit(): void {
    this.sendQuery();
    const jsonArray = [];
    const json = {
      name: "tom",
      age: 22,
      tall: true
    };
    jsonArray.push(json);
    this.appcomp.setData("mycat", json);
    const data = this.appcomp.getData("mycat");
    console.log(data);
    const json2 = {
      name: "tom2",
      age: 222,
      tall: false
    };
    jsonArray.push(json2);
    this.appcomp.editData("mycat", json2);
    let data2 = this.appcomp.getData("mycat");
    data2 = JSON.parse(String(data2));
    console.log(data2);
    this.appcomp.setData("mycatArray", jsonArray);
    let dataArray = this.appcomp.getData("mycatArray");
    console.log(dataArray);
    //this.appcomp.removeData();
  }

  sendQuery = () => {
    this.cargandoBand = true;
    this.bsqServicio.busqueda(this.bskModel.q, this.bskModel.page).then( (response) => {
      this.cargandoBand = false;
      this.resultadoBsk =  response;
    }, (error) => {
      alert("error: " + error.statusText );
    })

  }

}
