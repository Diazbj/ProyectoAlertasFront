import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {

  constructor(public router: Router) {
    
  }

  public cerrarSesion(): void {
    this.router.navigate(['/']);
  }

  public goToInicio(): void {
    this.router.navigate(['/home-usuario']);
  }

  public goToReporte(): void {
    this.router.navigate(['/home-usuario/reportes']);
  }

  public goToCategoria(): void {
    this.router.navigate(['/home-usuario/categorias']);
  }

  public goToPerfil(): void {
    this.router.navigate(['/home-usuario/perfil']);
  }

  public goToActualizarPassword(): void {
    this.router.navigate(['/home-usuario/actualizar-password']);
  }
}