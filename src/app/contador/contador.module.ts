
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ],
    imports:[
        //CommonModule  
        //no hace falta porque en el html no utilizamos
        //las directivas *ngIf, *nFor  
    ]
})
export class ContadorModule{
    }
