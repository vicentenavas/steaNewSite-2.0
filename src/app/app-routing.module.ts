import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiziComponent } from './servizi/servizi.component';
import { SocietaComponent } from './societa/societa.component';
import { Error404Component } from './error404/error404.component';
import { ContattiComponent } from './contatti/contatti.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  { path: 'servizi/:id', component: ServiziComponent , pathMatch: 'full'},
  {path: 'società', component: SocietaComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
