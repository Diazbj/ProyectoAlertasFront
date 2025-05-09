import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-password',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-password.component.html',
  styleUrl: './nuevo-password.component.css'
})

export class RecuperarPassword {

  nuevoPasswordForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, public router:Router){
    this.nuevoPasswordForm = this.formBuilder.group({

    });
  }

  public nuevoPassword(){
    console.log("We are here");
  }

  public irLogin(){
    this.router.navigate(["/login"]);
  }

}
