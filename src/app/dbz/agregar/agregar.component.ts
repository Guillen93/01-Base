import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../Interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  // @Input() personajes:Personaje[]=[];
  constructor(private dbzService:DbzService){};
  @Input() nuevo: Personaje={
    nombre:'',
    poder: 0
  }
  // @Output() onNuevoPersonaje:EventEmitter<Personaje> = new EventEmitter();

agregar(){
console.log(this.nuevo);
if(this.nuevo.nombre.trim().length===0) { return; }
// this.onNuevoPersonaje.emit(this.nuevo);
this.dbzService.agregarNuevoPersonaje(this.nuevo)
// this.personajes.push(this.nuevo)
this.nuevo={nombre:"",poder:0}

};

}
