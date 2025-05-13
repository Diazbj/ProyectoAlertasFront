import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activar-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './activar-usuario.component.html',
  styleUrls: ['./activar-usuario.component.css']
})

export class ActivarUsuarioComponent {

  activarForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router: Router){
    this.activarForm = this.formBuilder.group({
      correoElectronicoUsuario: ['', [Validators.required]],
      codigoAutenticacionUsuario: ['', [Validators.required]]
    });
  }

  public formActiUsua(){
    console.log("We are here");
  }

  public goToInicio(){
    this.router.navigate(["/"]);
  }

}