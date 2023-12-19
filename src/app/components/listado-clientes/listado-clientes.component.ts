import { Component } from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {ClienteModel} from "../../cliente.model";

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent {
  constructor(protected clienteService: ClientesService) {
  }
  clientes : ClienteModel[] = []

  getCustomer(){
    this.clienteService.getClientes().subscribe(cleintes => this.clientes=cleintes)
  }
}
