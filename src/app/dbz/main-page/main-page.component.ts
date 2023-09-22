import { Component, NgModule, inject } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  // // personajes:Personaje[]=[];
  // constructor(private dbzService: DbzService) {
  //   // this.personajes=dbzService.personajes;
  // }
  // // get personajes(): Personaje[] {
  // //   return this.dbzService.personajes
  // // }
  // // private dbzService = inject(DbzService);
  // // personajes=this.dbzService.personajes;
  // nuevo: Personaje = { nombre: 'Maestro Roshi', poder: 1000 }ç


  nuevo: Personaje = { nombre: 'Maestro Roshi', poder: 1000 }

  // agregarNuevoPersonaje(argumento: Personaje) {
  //   console.log(argumento)
  //   this.personajes.push(argumento)
  // }

}
