import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoriaDTO } from '../../dto/categoria-dto';

@Component({
  selector: 'app-categorias',
  imports: [RouterOutlet,RouterModule,ReactiveFormsModule],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})

export class CategoriasComponent {
  categoriaForm!: FormGroup;
  categoria: CategoriaDTO[] = [
    {
      nombre: 'Accidentes de Transito',
      color: '#007BFF',
      descripcion: 'Categoría relacionada con temas accidentes de transito.'
    },{
      nombre: 'Hurtos',
      color: '#007BFF',
      descripcion: 'Categoría relacionada con temas hurtos.'
    },{
      nombre: 'Derrumbes',
      color: '#007BFF',
      descripcion: 'Categoría relacionada con temas derrumbes.'
    }
  ];

  constructor(private formBuilder: FormBuilder, public router: Router){
    this.categoriaForm = this.formBuilder.group({
      nombreCategoria: ['', [Validators.required]]
    })
  }

  public cateForm(){

  }

  public goToInicio(){
    this.router.navigate(["/home-usuario"]);
  }

}