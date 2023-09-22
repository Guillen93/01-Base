import { Injectable } from "@angular/core";
import { Personaje } from "../Interfaces/dbz.interfaces";
@Injectable()

export class DbzService {
    constructor() {
        console.log('Servicio inicializado');
    }
    private _personajes: Personaje[] = [
        { nombre: 'Goku', poder: 15000 },
        { nombre: 'Vegeta', poder: 7500 },
    ]

    get peronajes(): Personaje[] {
        //devuelve una copia del array 
        return [...this._personajes];
    }
    agregarNuevoPersonaje(personaje: Personaje) {
       
        this._personajes.push(personaje)
    }
}

