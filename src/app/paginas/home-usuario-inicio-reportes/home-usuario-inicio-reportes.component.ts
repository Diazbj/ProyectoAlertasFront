import { afterNextRender, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapaComponent } from "../../componentes/mapa/mapa.component";
import { ReporteDTO } from '../../dto/reporte-dto';
import { ReporteService } from '../../servicios/reporte.service';
import { MapaService } from '../../servicios/mapa.service';

@Component({
  selector: 'app-home-usuario-inicio-reportes',
  imports: [CommonModule,MapaComponent],
  templateUrl: './home-usuario-inicio-reportes.component.html',
  styleUrl: './home-usuario-inicio-reportes.component.css'
})

export class HomeUsuarioInicioReportesComponent implements OnInit{ 
  latitud:number = 4.514;
  longitud:number = -75.674;
  reportesDTO: ReporteDTO[] = [];

  ngOnInit(): void {
    this.obtenerReportesCerca();
  }
  
  constructor(private reporteService: ReporteService, private mapaService: MapaService){ 
    
  }

  public obtenerReportesCerca(){
    this.reporteService.obtenerReportesCerca(this.latitud, this.longitud).subscribe({
      next: (data) => {
        this.reportesDTO = data.mensaje;
        this.mapaService.crearMapa();
        this.mapaService.pintarMarcadores(this.reportesDTO);
      },
      error: (error) => {
        console.log(error.error.contenido);
      }
    });
  }

  public visualizarDetalle(reporeDTO: ReporteDTO){

  }

}