import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './input-prop.component.html',
  styleUrls: ['./input-prop.component.css']
})
export class InputPropComponent implements OnInit {

  @Input() nome = "";

  constructor() { }

  ngOnInit() {
  }

}
