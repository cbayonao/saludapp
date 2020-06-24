import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AgendaCitaComponent } from './components/agenda-cita/agenda-cita.component';
import { DirectorioMedicoComponent } from './components/directorio-medico/directorio-medico.component';
import { MedicoEnCasaComponent } from './components/medico-en-casa/medico-en-casa.component';
import { CotizaCirugiaComponent } from './components/cotiza-cirugia/cotiza-cirugia.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agenda', component: AgendaCitaComponent },
  { path: 'directoriomedico', component: DirectorioMedicoComponent },
  { path: 'cotizacirugia', component: CotizaCirugiaComponent },
  { path: 'medicoencasa', component: MedicoEnCasaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
