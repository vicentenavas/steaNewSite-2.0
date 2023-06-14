import { Component, ElementRef, HostListener } from '@angular/core';
import { homeLinks } from './models/shared/model';
import { DataService } from './services/data/data.service';
import { Servizio } from './models/shared/model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private router: Router;
  title = 'steaNewSite-2.0';
  serviziList: Servizio[] = [];
  menuAbierto: boolean = false;

  constructor(
    private dataService: DataService,
    private elementRef: ElementRef,
    router: Router
  ) {
    this.router = router;
  }

  ngOnInit(): void {
    // This makes the page scroll to the top when you click the "more information" button
    this.router.events.subscribe((x) => {
      if (x instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }


      

      window.addEventListener('scroll', this.scrollHandler);
    });

    // Show all services in the sub menu
    this.serviziList = this.dataService.getServizioList();
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scrollHandler);
  }


  scrollHandler() {
    var scrollPosition = window.scrollY;
  
    // Obtén la altura de la barra de navegación o cualquier otra referencia de desplazamiento si es necesario
    var navHeight = 64; // Ejemplo: 64 píxeles
  
    var logoTextContainer = document.querySelector('.scroll-hide');
  
    if (logoTextContainer) {
      // Calcula la posición de desplazamiento en la que los elementos deben desaparecer
      var hidePosition = navHeight;
  
      if (scrollPosition > hidePosition) {
        logoTextContainer.classList.add('hidden');
      } else {
        logoTextContainer.classList.remove('hidden');
      }
    }
  }
  

  
  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  closeMenu() {
    this.menuAbierto = false;
  }

  

  // Nav bar links
  homeLinks: homeLinks[] = [
    { id: 0, name: 'home', url: '/' },
    { id: 1, name: 'società', url: 'società' },
    { id: 2, name: 'contatti', url: 'contatti' },
  ];
}
