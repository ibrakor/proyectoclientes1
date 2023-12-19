import { Injectable } from '@angular/core';
import {ClienteModel} from "../cliente.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes: ClienteModel[] = []
  grupos =  [
    {
      id: 0,
      nombre: 'Sin definir'
    },
    {
      id: 1,
      nombre: 'Activos'
    },
    {
      id: 2,
      nombre: 'Inactivos'
    },
    {
      id: 3,
      nombre: 'Deudores'
    },
  ];
  getClientes(): Observable<ClienteModel[]>{
    return of(this.clientes)
  }
  agregarCliente(nuevoCliente: ClienteModel){
    this.clientes.push(nuevoCliente)

  }
  getGrupos(){
    return this.grupos
  }

  constructor() { }

}
