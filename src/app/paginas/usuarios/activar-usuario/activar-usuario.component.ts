import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-activar-usuario',
  imports: [ReactiveFormsModule],
  templateUrl: './activar-usuario.component.html',
  styleUrls: ['./activar-usuario.component.css']
})

export class ActivarUsuarioComponent implements OnInit {

  activarForm!: FormGroup;

  ngOnInit(): void {
    console.log('ActivarUsuarioComponent cargado');
  }

  constructor(private formBuilder: FormBuilder){
    this.activarForm = this.formBuilder.group({

    });
  }

  public login(){
    console.log("We are here");
  }

}