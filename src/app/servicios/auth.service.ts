import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginDTO } from '../dto/login-dto';
import { MensajeDTO} from '../dto/mensaje-dto';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private authURL = "http://localhost:8080/api";

  constructor(private http: HttpClient) { 

  }

  public iniciarSesion(loginDTO: LoginDTO): Observable<MensajeDTO> {
    return this.http.post<MensajeDTO>(`${this.authURL}/login`, loginDTO);
  }

}