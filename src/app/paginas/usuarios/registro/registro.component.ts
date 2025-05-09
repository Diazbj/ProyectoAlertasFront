import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

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

    });
  }

  public registro(){
    console.log("We are here");
  }

  public irInicio(){
    this.router.navigate(["/"]);
  }

}