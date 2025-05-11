import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterOutlet,RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router:Router){
    this.loginForm = this.formBuilder.group({
      emailUsuario: ['', [Validators.required]],
      passwordUsuario: ['', [Validators.required]]
    })
  }

  public loginFormulario(){
    console.log("We are here");
  }

  public login(){
    this.router.navigate(["/home-usuario"])
  }

  public irInicio(){
    this.router.navigate(["/"]);
  }

}
