import { Injectable } from '@angular/core';
//importar en el service el storage de angular
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) {
    //crear al storage para usarlo
    this.init(); 
   }
  //crea el storage 
  async init()
  {
    await this.storage.create();
  }
  //ingresar datos al storage con key
  async agregarConkey(key:string, valor:string)
  {
    await this.storage.set(key, valor);

  }
  // ingresar datos al storage con key autoincrementable
  async agregar(valor:any)
  {
    let id = await this.storage.length() + 1 ;
    await this.storage.set(id.toString(), valor);
  }
  async rescatar(key:string)
  {
    return await this.storage.get(key);
  }
  listar()
  {
    let listado = []
    this.storage.forEach((v,k) => {listado.push(v); })
    return listado;
  }
  eliminar(key:string)
  {
    this.storage.remove(key);
   }
}
