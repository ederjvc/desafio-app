import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios';
import { UsuariosService } from '../../usuarios.service';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styles: [
  ]
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  errors: String[];

  constructor( private service: UsuariosService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  clicar(){
    this.service
    .salvar(this.usuario)
    .subscribe( response =>{
      this.success = true;
      this.errors = null;
      this.usuario = response;
    } , errorResponse =>{
      this.success = false;
      this.errors = errorResponse.error.errors;
    })
  }

}
