import { Component, HostListener, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../services/data/data.service';
import { Servizio } from '../models/shared/model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  servizio: Servizio[] = []
  animacionClase: string = '';
  frases: string[] = ['Una società di Engineering', 'Una società che guarda verso il futuro', 'Professionisti'];
  fraseActual: string = this.frases[0];
  animacionDerechaIzquierda: boolean = false;
  intervalo: any;
  
  constructor(private service: DataService){}

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.cambiarFrase();
    }, 5000); // Cambia la frase cada 5 segundos (5000 milisegundos)

    this.servizio = this.service.getServizioList();
  }

  ngOnDestroy() {
    clearInterval(this.intervalo); // Limpia el intervalo cuando se destruye el componente
  }

  cambiarFrase(): void {
    this.animacionDerechaIzquierda = true;
    setTimeout(() => {
      const indiceActual = this.frases.indexOf(this.fraseActual);
      const siguienteIndice = (indiceActual + 1) % this.frases.length;
      this.fraseActual = this.frases[siguienteIndice];
      this.animacionDerechaIzquierda = false;
      // Añadir clases de animación
      this.animacionClase = 'salida';
      setTimeout(() => {
        // Cambiar frase y añadir clase de entrada
        this.fraseActual = this.frases[siguienteIndice];
        this.animacionClase = 'entrada';
      }, 1000); // Retardo de 1 segundo antes de que aparezca el nuevo texto
    }, 500); // Retraso de 500 milisegundos para permitir que se complete la animación
  }


}
