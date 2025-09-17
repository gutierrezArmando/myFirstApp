import { Component } from '@angular/core';
import { DarshBoardChildComponent } from "../darsh-board-child/darsh-board-child.component";

export interface Persona{
  nombre:string,
  edad: number,
  esAlumno:boolean
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [DarshBoardChildComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  personas:Persona[]=[
    {
      nombre:"Nombre 1",
      edad:28,
      esAlumno:true
    },
    {
      nombre:"Nombre 2",
      edad:30,
      esAlumno:false
    }
  ];

  ngOnInit() {
    // console.log(this.personas[0].nombre);
    // console.log("dashboard");
    // console.log("La persona 0");
    // for(var i=0; i<this.personas.length;){
    //   // console.log(`La persona ${i}: ${JSON.stringify(this.personas[i]) }`);
    //   // console.log(JSON.stringify(this.personas[i]));
    //   console.log(`La persona ${i}: `);
    //   console.log(this.personas[i++]);
    // }

    this.personas.forEach((varPersona)=>{
      console.log(varPersona);
    });
  }
}
