import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReporteDTO } from '../dto/reporte-dto';
import { MensajeOpcionalDTO } from '../dto/mensaje-opcional-dto';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})

export class ReporteService {
  private reportesURL = "http://localhost:8080/api/reportes";

  constructor(private http: HttpClient, private tokenService: TokenService) { 

  }

  public obtenerReportesCerca(latitud: number, longitud: number): Observable<MensajeOpcionalDTO<ReporteDTO[]>>{
    const token = this.tokenService.getToken();

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    const params = new HttpParams()
      .set('latitud', latitud.toString())
      .set('longitud', longitud.toString());

    return this.http.get<MensajeOpcionalDTO<ReporteDTO[]>>(`${this.reportesURL}/ubicacion`, { headers, params });
  }

}