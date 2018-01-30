import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

//import { EventEmitter } from 'events';

@Component({
  selector: 'contador',
  templateUrl: './output-prop.component.html',
  styleUrls: ['./output-prop.component.css']
})
export class OutputPropComponent implements OnInit {

  @Input() valor = 0;

  @Output() mudouValor = new EventEmitter();

  @ViewChild('campoInput') campoValorInput: ElementRef;

  incrementa(){
    //this.valor++;
    this.campoValorInput.nativeElement.value++;
    this.mudouValor.emit({novoValor : this.valor});
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor : this.valor});
  }

  constructor() { }

  ngOnInit() {
  }

}
