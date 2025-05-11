import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-password',
  imports: [],
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

  public buttonActualizar(){

  }

  public irPerfil(){
    
  }

}