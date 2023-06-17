import { Injectable } from '@angular/core';
import { Servizio, img, siOcuppa } from 'src/app/models/shared/model';
import { Observable, of, throwError } from 'rxjs';
import { NavigationEnd, Route, Router } from '@angular/router';
import { Contact } from 'src/app/models/shared/model';
import { Socio } from 'src/app/models/shared/model';
@Injectable({
  providedIn: 'root',
})
export class DataService {



  constructor(private router: Router) { }


  //all the services of the interprice, i decided to set an array of imgs to make the code more esay and in that way model 
  //the ngFor without the necesity of take an specific img, example <img [src]="item.img[0].url" alt="" class="md:h-88 h-screen w-full object-none opacity-80">
  //here the img 0 is the img of home, the img of serviziDetail will be the the [1] in that way is esaier to create and understand the html
  //the same dilema with description and siOCuppa   !!
  
  private servizioList: Servizio[] = [
    {
      id: 0,
      name: 'Impianti Termoidraulici',
      homeDescription: '',
      homeTitle: 'Termoidraulici',
      description: 
      [
        {id: 1, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori.",},
        {id: 2, text: "Progettazione impianti termoidraulici e reti trasporto gas e liquidi"},
        {id: 3, text: "L’attività di progettazione, viene svolta nell’ambito di impianti termoidraulici per il settore civile e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."}
      ],
    
        img: [{ id: 1, url: '/assets/img/home/img24.jpg' },
      {id:2, url: '/assets/img/home/img18.jpg' }],
        siOcuppa:[
          {id:1, info:"impianti di climatizzazione nel settore civile, industriale, ospedaliero eccs"},
          {id:2, info:"reti energetiche per teleriscaldamento abbinati a sistemi di generazione, cogenerazione o trigenerazione"},
          {id:3, info:"reti acquedottistiche urbane e extraurbane"},
          {id:4, info:"reti smaltimento acque bianche"},
          {id:5, info:"reti fognarie"},
          {id:6, info:"centrali di produzione aria propanata e centrali di stoccaggio gas"},
          {id:7, info:"impianti gas medicali in ambienti ad uso medico"},
          {id:8, info:"impianti di rilevazione incendio e/o spegnimento"},
          {id:9, info:"reti cittadine di distribuzione gas metano ad uso civile ed industriale in BP"},
          {id:10, info:"reti di distribuzione gas naturale, metano, GPL, aria propanata, aria compressa, ecc."},
          {id:11, info:"impianti a biomassa o biogas"},
          {id:12, info:"impianti solari o di solar cooling"},
          {id:13, info:"impianti geotermici"},
          {id:14, info:"impianti idroelettrici"},
          {id:15, info:"impianti di produzione e trasporto vapore e/o acqua surriscaldata nel settore industriale e ospedaliero"},
          {id:16, info:"progettazioni antincendio"},
          {id:17, info:"impianti di cogenerazione o rigenerazione"},
          {id:18, info:"analisi e simulazioni energetiche"},
          {id:19, info:"piani energetici ambientali d’ambito"},
          {id:20, info:"green buildings"}
  
        ]
    },

    {
      id: 1,
      name: 'Impianti Elettrici',
      homeDescription: '',
      homeTitle: 'Impianti Elettrici',
      description:
       [
        {id: 1, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori.",},
        {id: 2, text: "L’attività di progettazione elettrica viene svolta per impianti elettrici MT e BT nel settore civile, industriale e terziario con redazione di elaborati grafici su supporto informatico, computi metrici e contabilità dei lavori."},
   
      ],
      img: [{ id: 1, url: '/assets/img/home/img13.jpg' },
      { id: 1, url: '/assets/img/home/img19.jpg' }],
      
      siOcuppa:[
        {id: 0, info: "Impianti in luoghi particolari ad alto rischio di incendio, locali di pubblico spettacolo, ambienti con pericolo di esplosione, ad uso medico e di sicurezza."},
        {id: 1, info: "Reti cablate."},
        {id: 2, info: "Impianti di rivelazione incendio e antintrusione."},
        {id: 3, info: "Progettazione di impianti parafulmine."},
        {id: 4, info: "Impianti di illuminazione pubblica con valutazione economica attualizzata delle diverse tipologie in uso."},
        {id: 5, info: "Impianti fotovoltaici."},
        {id: 6, info: "Analisi dei carichi, delle contemporaneità e dei consumi di energia."}

      ]
    },
    
    {
      id: 2,
      name: 'Progettazione Architettonica',
      homeDescription: '',
      homeTitle: 'Progettazione Architettonica',
      description: [
        {id: 1, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici.",},
        {id: 2, text: "Progettazione architettonica e strutturale"},
        {id: 3, text: "L’attività di progettazione architettonica è volta alla realizzazione di opere pubbliche e di opere private, con particolare attenzione ai canoni di risparmio energetico e di consulenza alla progettazione “efficiente”, con studio dei particolari esecutivi e dell’eliminazione di ponti termici ed acustici."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img29.jpg' },
      { id: 2, url: '/assets/img/home/img20.jpg' }],
      
      siOcuppa:[
        {id:1, info: "edifici residenziali a basso impatto ambientale e a basso consumo"},
        {id:2, info: "edifici di importanza pubblica"},
        {id:3, info: "edifici tutelati dai beni culturali"},
        {id:4, info: "responsabili di progetto e coordinamento progettazione"},
        {id:5, info: "strutture architettoniche speciali quali serre fotovoltaiche o coperture in legno di grandi dimensioni"},
        {id:6, info: "interventi di riqualificazione energetica di edifici esistenti"},
     
        
      ]
    },
    {
      id: 3,
      name: 'Illuminazione Pubblica',
      homeDescription: '',
      homeTitle: 'Illuminazione Pubblica',
      description: [
        {id: 1, text: "Redazione e sviluppo piani regolatori di illuminazione comunale.", },
        {id: 2, text: "Redazione e sviluppo Piani Regolatori di Illuminazione Comunale", },
        {id: 3, text: "L’attività di sviluppo dei piani regolatori di illuminazione pubblica richiesti dalla Legge Provinciale n.16/2007 viene svolta in stretto contatto con l’amministrazione."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img17.jpg' },
      { id: 2, url: '/assets/img/home/img21.png' }],
      
      siOcuppa:[
        {id: 0, info: "Identificazione degli obiettivi del Piano."},
{id: 1, info: "Rilievo dello stato attuale."},
{id: 2, info: "Formulazione di una soluzione integrata per l'illuminazione."},
{id: 3, info: "Definizione della distribuzione dei punti luce."},
{id: 4, info: "Specifica delle prestazioni richieste per le singole zone."},
{id: 5, info: "Selezione delle tipologie di riferimento costruttive e impiantistiche."},
{id: 6, info: "Considerazione dell'inserimento ambientale."},
{id: 7, info: "Classificazione delle strade secondo la normativa UNI e il codice della strada."},
{id: 8, info: "Elaborazione della prima bozza da condividere con l'amministrazione comunale."},
{id: 9, info: "Fase propedeutica per la stesura finale del piano."},
{id: 10, info: "Consegna del Piano alla Committenza per l'approvazione."},
{id: 11, info: "Inserimento del Piano nel Regolamento Edilizio Comunale."},
     
      ]
    },
    {
      id: 4,
      name: 'Certificazioni Energetiche',
      homeDescription: '',
      homeTitle: 'Certificazioni Energetiche',
      description: [
        {id: 1, text: "L’organico della Società è costituito da Professionisti qualificatisi nelle varie forme della certificazione energetica.",},
        {id: 2, text: "L’organico della Società è costituito da Professionisti qualificatisi nelle varie forme della certificazione energetica. Stea Progetto sviluppa tutti quei concetti, sia architettonici sia impiantistici sia di cantiere, che stanno alla base delle costruzioni civili certificate."},
        {id: 3, text: "Compito della Società è fornire tutte le informazioni che possano poi portare ad una scelta consapevole e corretta dal punto di vista normativo, anche alla luce dell’entrata in vigore del D.M. 26 giugno 2015, le Linee guida nazionali per la certificazione energetica degli edifici." }
      ],
      img: [{ id: 1, url: '/assets/img/home/img10.jpg' },
    {id:2, url: '/assets/img/home/img25.png'}],
      
      siOcuppa:[
        {id:1, info: "il sistema CasaClima di Bolzano"},
        {id:2, info: "certificazioni imposte dalla Provincia Autonoma di Trento per la costruzione di edifici pubblic"},
        {id:3, info: "il sistema LEED"},
        {id:4, info: "certificazione ARCA"},
   
      ]
    },
    {
      id: 5,
      name: 'Risparmio Energetico',
      homeDescription: '',
      homeTitle: 'Risparmio Energetico',
      description: [
        {id: 1, text: "Stea Progetto affronta l’argomento delle analisi energetiche ponendo l’attenzione a tutti gli aspetti in cui la problematica si articola.",},
      ],
      img: [{ id: 1, url: '/assets/img/home/img27.jpg' }],
      
      siOcuppa:[]
    },
    {
      id: 6,
      name: 'Sicurezza Cantieri',
      homeDescription: '',
      homeTitle: 'Sicurezza Cantieri',
      description: [
        {id: 1, text: "La nostra struttura svolge attività di coordinamento della sicurezza mediante predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale e attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera.",},
        {id: 2, text: "Tra le attività svolte nei cantieri la Sicurezza è divenuta, con il passare degli anni, un argomento sempre di maggiore importanza. La nostra struttura ottempera alle disposizioni normative e legislative in ai sensi del Decreto Legislativo 81/2008 e ss. mm. e ii. svolgendo attività di coordinamento della sicurezza sia mediante la predisposizione di Piani di Sicurezza e Coordinamento in fase progettuale, sia mediante attività diretta di prevenzione e controllo presso i cantieri durante la fase esecutiva dell’opera. Nel corso degli anni si è avuta la possibilità di acquisire ed incrementare l’esperienza e di conseguire maggiore competenza grazie allo svolgimento di corsi specifici di aggiornamento."}
      ],
      img: [{ id: 1, url: '/assets/img/home/img16.jpg' },
      { id: 2, url: '/assets/img/home/img26.jpg' }],
      
      siOcuppa:[ 
      {id: 0, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"},
      {id: 1, info: "Cantieri per la nuova installazione elementi tecnologici"},
      {id: 2, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività abitative residenziali, terziarie e industriali"},
      {id: 3, info: "Cantieri per la costruzione edile e la realizzazione impiantistica di attività tecnologiche"},
      {id: 4, info: "Cantieri di ristrutturazione impiantistica"},
      {id: 5, info: "Cantieri per la realizzazione di infrastrutture di interesse comunale"}]
    },
  ];

socioList: Socio[] = [
{id:1, name: 'ing. Giulia Benatti', description: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento' },
{id:1, name: 'ing. Giulia Benatti', description: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento' },
{id:1, name: 'ing. Giulia Benatti', description: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento' },
{id:1, name: 'ing. Giulia Benatti', description: 'Iscritta al n. 2248 dell’Albo degli Ingegneri della Provincia di Trento' }
]


  //get all the services; check the models to understand the array
  getServizioList(): Servizio[] {
    return this.servizioList;
  }


  getSocio(): Socio[]{
    return this.socioList;
  }
  //dinamic routing...
  getServiizioDetailById(id: number): Servizio | undefined {
    return this.servizioList.find(servizio => servizio.id === id);
  }


  getSocioById(id: number): Socio | undefined {
    return this.socioList.find(socio => socio.id === id)
  }
//end of the home and service info
//<--------------------------------------------------------------------------------------------------------------------------------------->





//contact info
  private contact: Contact[] = [
    {id: 1, info: ' 0464 512776'},
    {id: 2, info: ' info@steaprogetto.com'},
    {id: 3, info: ' 0464 513715'},
    {id: 4, info: ' Via Santa Caterina, 60 - 38062 Arco TN'},
  ]



getContact(): Contact[]{
  return this.contact
}
//get the contact info
//end of contact section

}
