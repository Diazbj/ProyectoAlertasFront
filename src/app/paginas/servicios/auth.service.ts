import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../../dto/login-dto';
import { RespuestaDTO } from '../../dto/respuesta-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authURL = "http://localhost:8080/api";

  constructor(private http: HttpClient) { 

  }

  public iniciarSesion(loginDTO: LoginDTO): Observable<RespuestaDTO> {
    return this.http.post<RespuestaDTO>(`${this.authURL}/login`, loginDTO);
  }

}