import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template:`
  <h1>{{ titulo }}</h1>
  <h2>La base es: <strong> {{ base }} </strong></h2>
  <button (click)=" acumular(base) "> + {{ base }} </button>
  <span> {{ numero }} </span>
  <button (click)=" acumular(-base) " > -  {{ base }} </button>
  `
})
export class ContadorComponente{
  titulo = 'Contador App';
  numero: number = 10;
  base  : number = 5;

  acumular( valor: number ) {
    this.numero += valor;
  }
}
