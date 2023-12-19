import {Component, OnInit} from '@angular/core';
import {ClientesService} from "../../services/clientes.service";
import {ClienteModel} from "../../cliente.model";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-listado-clientes',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './listado-clientes.component.html',
  styleUrl: './listado-clientes.component.css'
})
export class ListadoClientesComponent implements OnInit{
  constructor(protected clienteService: ClientesService) {
  }
  clientes : ClienteModel[] = []

  getCustomer(){
    this.clienteService.getClientes().subscribe(cleintes => this.clientes=cleintes)
  }

  ngOnInit(): void {
    this.getCustomer()
  }
}
