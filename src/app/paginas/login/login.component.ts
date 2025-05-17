import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { LoginDTO } from '../../dto/login-dto';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterOutlet,RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm!: FormGroup;
  cargando: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    public router:Router,
    private authService: AuthService,
    private tokenService: TokenService
  ){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

public login() {
  this.cargando = true;

  // Espera 1 segundo antes de hacer la petición al backend
  setTimeout(() => {
    const loginDTO = this.loginForm.value as LoginDTO;
    this.authService.iniciarSesion(loginDTO).subscribe({
      next: (data) => {
        this.tokenService.login(data.mensaje.token);
        console.log('Token recibido:', data.mensaje.token);
        console.log('Token almacenado:', sessionStorage.getItem("AuthToken"));
        console.log(data.mensaje.token);
        this.cargando = false; // Oculta el spinner
      },
      error: (error) => {
        console.log(error.error.contenido);
        this.cargando = false; // Oculta el spinner también en caso de error
        if (error.error.mensaje == "Usuario o contraseña incorrectos") {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos'
          });
        }
      },
    });
  }, 1000); // 1 segundo de espera
}
  
  public goToInicio(){
    this.router.navigate(["/"]);
  }

}