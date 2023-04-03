import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from './usuarios/usuarios';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  apiURL: string = environment.apiURLBase+'/usuarios';

  constructor( private http: HttpClient ) { }

  salvar( usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiURL}`, usuario )
  }

  getUsuarios() :Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiURL);
  }
}
