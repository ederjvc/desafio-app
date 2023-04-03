import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Usuario } from '../usuarios';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.css']
})
export class UsuariosListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioSelecionado: Usuario;
  mensagemSucesso: string;
  mensagemErro: string;

  constructor( private service: UsuariosService,
    private router: Router ) { }

  ngOnInit(): void {
    this.service.getUsuarios()
      .subscribe(resposta => this.usuarios = resposta);
  }

}
