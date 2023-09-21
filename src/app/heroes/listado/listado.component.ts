import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes:string[]=["Batman", "Superman", "Spiderman", "Ironman", "Wonder Woman"]
heroeBorrado:string='';


borrarHeroe(){
  // this.heroes=[];
// this.heroeBorrado=this.heroes.shift()||''; //borrar el primero
this.heroeBorrado=this.heroes.pop()||''; //borrar el ultimo
}

}
