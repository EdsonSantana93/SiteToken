import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../servico/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  lista: Produto[];

  constructor(private srv: ProdutoService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("edyToken")){
      this.srv.getAllProduto().subscribe((res: Produto[]) =>{
        this.lista = res;
      },
      (err) => {
        this.router.navigate(['/inicio']);
      }
      );
    }else{
      this.router.navigate(['/inicio']);
    }
  }

}
