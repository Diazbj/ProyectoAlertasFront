import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-actualizar-password',
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './actualizar-password.component.html',
  styleUrl: './actualizar-password.component.css'
})

export class ActualizarPasswordComponent {
  actualizarPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router){
    this.actualizarPasswordForm = this.formBuilder.group({
      primerPassword: ['', [Validators.required]],
      segundoPassword: ['', [Validators.required]]
    });
  }

  public formActuPass(){

  }

  public actualizarPassword(){

  }

  public goToInicioUsuario(){
    this.router.navigate(["/home-usuario"]);
  }

}