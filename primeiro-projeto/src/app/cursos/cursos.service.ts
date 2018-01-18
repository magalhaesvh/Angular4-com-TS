import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {



  constructor() { }

  geCursos(){
    return ['Java', 'Python', 'Ruby'];
  }
}
