import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  registroForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router:Router){
    this.registroForm = this.formBuilder.group({
      nombreUsuario: ['', [Validators.required]],
      apellidoUsuario: ['', [Validators.required]],
      emailUsuario: ['', [Validators.required]],
      numeroContactoUsuario: ['', [Validators.required]],
      direccionUsuario: ['', [Validators.required]],
      passwordUsuario: ['', [Validators.required]]
    });
  }

  public formRegiUsua(){
    console.log("We are here");
  }

  public goToInicio(){
    this.router.navigate(["/"]);
  }

}