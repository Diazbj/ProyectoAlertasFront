import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { MensajeDTO } from '../dto/mensaje-dto';
import { CrearUsuarioDTO } from '../dto/usuarios/crear-usuario-dto';
import { UsuarioActivacionDTO } from '../dto/usuarios/usuario-activacion-dto';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl='http://localhost:8080/api/usuarios'

  constructor(private http:HttpClient,private authService: AuthService) { }

  crearUsuario(usuario: CrearUsuarioDTO): Observable<MensajeDTO> {
  return this.http.post<MensajeDTO>(`${this.apiUrl}`, usuario); // Sin headers
}

  activarCuenta(activacion:UsuarioActivacionDTO):Observable<MensajeDTO>{
    return this.http.post<MensajeDTO>(`${this.apiUrl}/Activar`,activacion);
  }
  

}
