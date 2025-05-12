import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { TokenService } from '../servicios/token.service';
import { LoginDTO } from '../../dto/login-dto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    public router:Router,
    private autShervice: AuthService,
    private tokenSercive: TokenService
  ){
    this.loginForm = this.formBuilder.group({
      emailUsuario: ['', [Validators.required]],
      passwordUsuario: ['', [Validators.required]]
    })
  }

  public loginFormulario(){
    const loginDTO = this.loginForm.value as LoginDTO;

    this.router.navigate(["/home-usuario"])

    /*
    this.autShervice.iniciarSesion(loginDTO).subscribe({
      next: (data) => {
        this.tokenSercive.login(data.mensaje.token);
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: error.error.contenido
        })
      }
    })
      */
  }

  public goToInicio(){
    this.router.navigate(["/"]);
  }

}