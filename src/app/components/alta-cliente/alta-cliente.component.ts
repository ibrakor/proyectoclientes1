import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {NgForOf} from "@angular/common";
import {ClienteModel} from "../../cliente.model";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-alta-cliente',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule
  ],
  templateUrl: './alta-cliente.component.html',
  styleUrl: './alta-cliente.component.css'
})
export class AltaClienteComponent {
  constructor(protected clienteService: ClientesService) {
  }
  nuevoCliente: ClienteModel = this.resetClient()
  saveCustomer(){
    this.clienteService.agregarCliente(this.nuevoCliente)
    this.nuevoCliente = this.resetClient()
  }
  resetClient(){
    return {
      id: 0,
      nombre: '',
      cif: '',
      direccion: '',
      grupo: 0
    };
  }


}
