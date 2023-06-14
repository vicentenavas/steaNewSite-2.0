import { Component, HostListener } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data/data.service';
import { Servizio, siOcuppa } from '../models/shared/model';
@Component({
  selector: 'app-servizi',
  templateUrl: './servizi.component.html',
  styleUrls: ['./servizi.component.css']
})
export class ServiziComponent implements OnInit {
  siOcuppaList: siOcuppa[] = [];

  servizio: Servizio | undefined;

constructor
(private route: ActivatedRoute, private servizioService: DataService ){}
  
  
ngOnInit(): void {
  this.route.params.subscribe(params => {
    const servizioId = Number(params['id']);
    const servizio = this.servizioService.getServiizioDetailById(servizioId);
    if (servizio) {
      this.servizio = servizio;
      this.siOcuppaList = servizio.siOcuppa;
      console.log(this.servizio)
    }
  });
}

}
