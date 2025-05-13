import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TokenService } from './servicios/token.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ProyectoAlertas';
  footer = 'Universidad del Quindío  2025-1';
  isUserLogged: boolean = false;

  constructor(private tokenService: TokenService) {
  }

  ngOnInit() {
    this.isUserLogged = this.tokenService.isLogged();
  }
}