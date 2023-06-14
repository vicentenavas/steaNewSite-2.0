import { Component, HostListener, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  animacionClase: string = '';
  frases: string[] = ['Una società di Engineering', 'Una società che guarda verso il futuro', 'Professionisti'];
  fraseActual: string = this.frases[0];
  animacionDerechaIzquierda: boolean = false;
  intervalo: any;
  menuAbierto: boolean = false;

  @ViewChild('menuContainer') menuContainer!: ElementRef;

  ngOnInit() {
    this.intervalo = setInterval(() => {
      this.cambiarFrase();
    }, 5000); // Cambia la frase cada 5 segundos (5000 milisegundos)
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

  @HostListener('document:click', ['$event'])
  handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const menuElement = this.menuContainer.nativeElement;
  
    // Comprueba si el elemento clicado está dentro del menú o el elemento de tu componente
    if (!menuElement.contains(target)) {
      // Lógica para cerrar el menú aquí
      this.menuAbierto = false;
    }
  }

  toggleMenu(): void {
    this.menuAbierto = !this.menuAbierto;
  }

  closeMenu(): void {
    this.menuAbierto = false;
  }
}
