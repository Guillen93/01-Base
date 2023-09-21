import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    //   templateUrl: './app.component.html',
    //   styleUrls: ['./app.component.css']
    template: `
        <h1 style="text-align: center; background-color: burlywood;">Bienvenido a {{title}}</h1>
        <h1>---------------------------------------------------------------------------------------------------------------------------------------</h1>
        <div style="text-align: center;color: aliceblue; background-color: blueviolet;" >
        <h2>{{title}}</h2>    
        <h1>------------------------------------------------------</h1>
        <button (click)=acumular(base)> + {{base}} </button>
        <span>{{number}}</span>
        <button (click)=acumular(-base)> - {{base}} </button>
        <h1>------------------------------------------------------</h1>
        </div>
        <h1>---------------------------------------------------------------------------------------------------------------------------------------</h1>
        
        `
        })
export class ContadorComponent {

    title = 'Contador APP';

    number: number = 10;
    base: number = 5;
    sumar() {
        this.number += 1;
    }

    restar() {
        this.number -= 1;
    }

    acumular(valor: number) {

        this.number += valor;
    }

}
