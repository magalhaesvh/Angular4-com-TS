import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.css']
})
export class DataBidingComponent implements OnInit {

  url: string = 'http://loiane.training';
  urlImagem: string = 'http://lorempixel.com/400/200/city/';
  valorAtual: string = '';

  valorSalvo = '';

  isMouseOver: boolean = false;

  nome = "abc";

  pessoa = {
    nome: "abc",
    cpf: 12345678
  };

  nomeDoCurso = "Python";

  botaoClicado(){
    alert("Clicou!!");
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento);
  }

  constructor() { 


  }

  ngOnInit() {
  }

}
