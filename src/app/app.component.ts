import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {AltaClienteComponent} from "./components/alta-cliente/alta-cliente.component";
import {ListadoClientesComponent} from "./components/listado-clientes/listado-clientes.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AltaClienteComponent, ListadoClientesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyectoclientes1';
}
