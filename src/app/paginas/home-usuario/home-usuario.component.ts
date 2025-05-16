import { Component } from '@angular/core';
import { MenuComponent } from '../../componentes/menu/menu.component';
import { CategoriasComponent } from "../categorias/categorias.component";
import { RouterModule } from '@angular/router';
import { MapaComponent } from "../../componentes/mapa/mapa.component";
import { HeaderComponent } from '../../componentes/header/header.component';

@Component({
  selector: 'app-home-usuario',
  imports: [MenuComponent, CategoriasComponent, RouterModule, MapaComponent, HeaderComponent],
  templateUrl: './home-usuario.component.html',
  styleUrl: './home-usuario.component.css'
})

export class HomeUsuarioComponent {

}
