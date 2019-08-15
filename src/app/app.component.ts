import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { resolve } from 'path';
import { reject } from 'q';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string ;
  arreglo: number [];
  pi: number;
  porcentaje: number;
  salario: number;
  heroe: {};
  valorPromesa: any;
  fecha: Date;
  nombre2: string;
  video: string;
  contrasena: string;
  contrasenaActiva: boolean;
  constructor() {
    this.nombre = 'Alvaro';
    this.arreglo = [1, 2 , 3, 4, 5, 6, 7, 8, 9];
    this.pi = Math.PI;
    this.porcentaje = 0.234;
    this.salario = 1234.5;
    this.fecha = new Date();
    this.video = '-2LtZRi6Q0s';
    this.contrasena = 'alvaro';
    this.contrasenaActiva = true;

    this.heroe = {
      nombre: 'logan',
      clave: 'wolverine',
      edad: 500,
      direccion: {
        calle: 'av 64 #64 -53',
        casa: '57'
      }
    };
    this.valorPromesa =    new Promise ( ( resolve , reject ) => {
    setTimeout(() => resolve ('LLego la promesa'), 3500);
     });

    this.nombre2 = 'AlvaRo GómEz GonZalEz';

  }

}
