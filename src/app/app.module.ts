import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule } from '@angular/material/core';

import { Page404Component } from './components/page404/page404.component';
import { AgendaCitaComponent } from './components/agenda-cita/agenda-cita.component';
import { HomeComponent } from './components/home/home.component';
import { MedicoEnCasaComponent } from './components/medico-en-casa/medico-en-casa.component';
import { CotizaCirugiaComponent } from './components/cotiza-cirugia/cotiza-cirugia.component';
import { DirectorioMedicoComponent } from './components/directorio-medico/directorio-medico.component';
import { CardRightComponent } from './components/appComponents/card-right/card-right.component';
import { CardLeftComponent } from './components/appComponents/card-left/card-left.component';
import { ButtonsDirMedicoComponent } from './components/appComponents/buttons-dir-medico/buttons-dir-medico.component';
import { CardMedicoComponent } from './components/appComponents/card-medico/card-medico.component';
import { CardEspecialesComponent } from './components/appComponents/card-especiales/card-especiales.component';
import { CardGeneralesComponent } from './components/appComponents/card-generales/card-generales.component';
import { ContainerCardMedicoComponent } from './components/appComponents/container-card-medico/container-card-medico.component';
import { FormAntecedentesMedicosComponent } from './components/appComponents/form-antecedentes-medicos/form-antecedentes-medicos.component';
import { FormDataUserComponent } from './components/appComponents/form-data-user/form-data-user.component';
import { FormDateComponent } from './components/appComponents/form-date/form-date.component';
import { FormEdadComponent } from './components/appComponents/form-edad/form-edad.component';
import { FormEspecialidadComponent } from './components/appComponents/form-especialidad/form-especialidad.component';
import { FormEstaturaComponent } from './components/appComponents/form-estatura/form-estatura.component';
import { FormHistoriaClinicaComponent } from './components/appComponents/form-historia-clinica/form-historia-clinica.component';
import { FormHourComponent } from './components/appComponents/form-hour/form-hour.component';
import { FormMedicoComponent } from './components/appComponents/form-medico/form-medico.component';
import { FormPesoComponent } from './components/appComponents/form-peso/form-peso.component';
import { FormSedeComponent } from './components/appComponents/form-sede/form-sede.component';
import { FormTipoCirugiaComponent } from './components/appComponents/form-tipo-cirugia/form-tipo-cirugia.component';
import { FormTipoProcedimientoComponent } from './components/appComponents/form-tipo-procedimiento/form-tipo-procedimiento.component';
import { FormTuDireccionComponent } from './components/appComponents/form-tu-direccion/form-tu-direccion.component';
import { HorarioMedicoComponent } from './components/appComponents/horario-medico/horario-medico.component';
import { MainFooterComponent } from './components/appComponents/main-footer/main-footer.component';
import { MainHeaderComponent } from './components/appComponents/main-header/main-header.component';
import { NavbarDirectorioComponent } from './components/appComponents/navbar-directorio/navbar-directorio.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    Page404Component,
    AgendaCitaComponent,
    HomeComponent,
    MedicoEnCasaComponent,
    CotizaCirugiaComponent,
    DirectorioMedicoComponent,
    CardRightComponent,
    CardLeftComponent,
    ButtonsDirMedicoComponent,
    CardMedicoComponent,
    CardEspecialesComponent,
    CardGeneralesComponent,
    ContainerCardMedicoComponent,
    FormAntecedentesMedicosComponent,
    FormDataUserComponent,
    FormDateComponent,
    FormEdadComponent,
    FormEspecialidadComponent,
    FormEstaturaComponent,
    FormHistoriaClinicaComponent,
    FormHourComponent,
    FormMedicoComponent,
    FormPesoComponent,
    FormSedeComponent,
    FormTipoCirugiaComponent,
    FormTipoProcedimientoComponent,
    FormTuDireccionComponent,
    HorarioMedicoComponent,
    MainFooterComponent,
    MainHeaderComponent,
    NavbarDirectorioComponent,
    MainNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatTableModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatDividerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
