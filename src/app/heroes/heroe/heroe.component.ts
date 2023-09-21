import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html',
//   styleUrls: ['./app.component.css']
})
export class heroeComponent {

  nombre: string = 'Ironman';
  edad  : number = 45

  get nombreCapitalizado(): string {
      return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
      return this.nombre + ' - ' + this.edad;
      //return `${this.nombre} - ${this.edad}`;
  }
  
  cambiarNombre(pepe:string){
    this.nombre=pepe;
  }
  cambiarEdad(edad:number){
    console.log('key¡¡¡¡¡¡');
    this.edad=edad;
  }
}
