import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  constructor(public router: Router){
    
  }

  public cerrarSesion(){
    this.router.navigate(["/"]);
  }

  public goToInicio(){
    
  }

  public goToReporte(){

  }

  public goToCategoria(){
    this.router.navigate(["/categorias"]);
  }

  public goToPerfil(){
    this.router.navigate(["/perfil"]);
  }

  public goToActualizarPassword(){
    this.router.navigate(["/actualizar-password"]);
  }
}