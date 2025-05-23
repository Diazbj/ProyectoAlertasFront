import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-reporte',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-reporte.component.html',
  styleUrls: ['./crear-reporte.component.css']
})
export class CrearReporteComponent {
  reporteForm!: FormGroup;
  selectedFiles: File[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.reporteForm = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      latitud: ['', [Validators.required]],
      longitud: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      categoria: ['', [Validators.required]],

    });
  }

  formCrearReporte() {
    console.log(this.reporteForm.value);
    console.log('Archivos seleccionados:', this.selectedFiles);
  }

  goToInicio() {
    this.router.navigate(['/']);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.selectedFiles = Array.from(input.files);
    }
  }
}