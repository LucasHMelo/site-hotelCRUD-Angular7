import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import {ConsultaCepService} from './services/consulta-cep.service';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';



//import { HotelInicioComponent } from './hotel-inicio/hotel-inicio.component';
//import { HotelModulesComponent } from './hotel-modules/hotel-modules.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents
    //HotelAdminComponent,
    //HotelAcomodacaoComponent,
    //HotelSobreComponent,
    //HotelReservarComponent,
    //HotelContatoComponent
    //HotelInicioComponent
    //HotelModulesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                           
    ReactiveFormsModule ,
    HttpClientModule,
    SlimLoadingBarModule
    //Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
