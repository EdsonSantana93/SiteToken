import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../servico/usuario.service';
import { Router } from '@angular/router';
import { Token } from 'src/app/model/Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();
  
  constructor(private srv: UsuarioService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("edyToken")){
      this.router.navigate(['/listagem'])
    }
  }

  enviarDados(){
    this.srv.autenticar(this.usuario).subscribe(
      (res: Token)=>{
        // se deu certo        
        // armazeno o token no LocalStorage
        localStorage.setItem("edyToken", res.atrToken);

        // navego para a página LISTAGEM
        this.router.navigate(['/listagem']);

      },
      (err)=>{
        // aqui indico mensagem = 1 para exibir a mensagem de erro
        alert("Senha ou email invalido");
      }
    );
  }
}
