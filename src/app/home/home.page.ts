import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
//importamos el service
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  nombre = "";
  grupo="";
  lista=[];

  constructor(private crud: CrudService) {}

  async agregar(txtNombre:HTMLInputElement,txtCodigo:HTMLInputElement,txtPrecio:HTMLInputElement,txtGrupo:HTMLInputElement,txtStock:HTMLInputElement)
  {
    const datos = [{"nombre" : txtNombre.value,
                    "codigo" : txtCodigo.value,
                    "precio" : txtPrecio.value,
                    "grupo"  : txtGrupo.value,
                    "stock"  : txtStock.value
                    }];
    await this.crud.agregar(datos); //agrega el dato al storage
    //limpia las cajas de texto
    txtNombre.value = "";
    txtCodigo.value = "";
    txtPrecio.value = "";
    txtGrupo.value = "";
    txtStock.value = "";
    
  }
  async buscar(txtNombre:HTMLInputElement)
  {
    //retorna el valor encontrado (si existe)
    const valor = await this.crud.rescatar(txtNombre.value);
    //muestra el valor encontrado
    this.nombre = valor[0].nombre;
    this.grupo = valor[0].grupo;
    //limpia las cajas de texto
    txtNombre.value = "";
  }
async listar()
{
  this.lista = this.crud.listar();
}
}
