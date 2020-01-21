import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  public autenticar(usuario: Usuario){
    return this.http.post("http://local:8080/login",usuario);
  }
}
