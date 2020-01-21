import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public getAllProduto(){
    let token = localStorage.getItem("edyToken");
    return this.http.get("http://localhost:8080/produto/todo?token=" + token);
  }
}


