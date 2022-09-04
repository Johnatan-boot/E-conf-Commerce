import { BoloscartService } from 'src/app/services/bolos';
import { Component, OnInit, Input } from '@angular/core';
import { Bolos } from 'src/app/models';

@Component({
  selector: 'app-carrinho-compras',
  templateUrl: './carrinho-compras.component.html',
  styleUrls: ['./carrinho-compras.component.scss']
})
export class CarrinhoComprasComponent implements OnInit {
  bolos : Bolos[] = [];
 @Input() valor:number = 0;

 incrementa(){
 this.valor++;
 }

 decrementa(){
  this.valor--;

 }
 constructor(private bolosCartService: BoloscartService) { }

 ngOnInit(): void {
 this.bolosCartService.bolos
  .subscribe(data => this.bolos = data);
}

 total(){
 let soma=0;
  this.bolos.forEach(bolo => {
    soma += bolo.quantidade * bolo.preco
  });
  return soma;
}



}
