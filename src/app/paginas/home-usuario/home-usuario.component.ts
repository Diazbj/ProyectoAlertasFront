import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { CategoriasComponent } from "../categorias/categorias.component";
import { RouterModule } from '@angular/router';
import { MapaComponent } from "../../componentes/mapa/mapa.component";

@Component({
  selector: 'app-home-usuario',
  imports: [MenuComponent, CategoriasComponent, RouterModule, MapaComponent],
  templateUrl: './home-usuario.component.html',
  styleUrl: './home-usuario.component.css'
})

export class HomeUsuarioComponent {

}
