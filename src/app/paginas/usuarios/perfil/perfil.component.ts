import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-perfil',
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export class PerfilComponent {

  actualizarPerfilForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router){
    this.actualizarPerfilForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      apellidoUsuario: ['', [Validators.required]],
      numeroContactoUsuario: ['', [Validators.required]],
      direccionUsuario: ['', [Validators.required]]
    });
  }

  public formActuPerf(){

  }

  public goToIniciousuario(){
    this.router.navigate(["/home-usuario"]);
  }

}