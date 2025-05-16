import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { TokenService } from '../../servicios/token.service';
import { LoginDTO } from '../../dto/login-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  loginForm!: FormGroup;

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
    const loginDTO = this.loginForm.value as LoginDTO;
    this.authService.iniciarSesion(loginDTO).subscribe({
      next: (data) => {
        this.tokenService.login(data.mensaje.token);
        console.log('Token recibido:', data.mensaje.token);
        console.log('Token almacenado:', sessionStorage.getItem("AuthToken"));
        console.log(data.mensaje.token);
      },
      error: (error) => {
        console.log(error.error.contenido);
        if (error.error.mensaje == "Usuario o contraseña incorrectos") {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos'
          });
        }
      },
    });
  }
  
  public goToInicio(){
    this.router.navigate(["/"]);
  }

}