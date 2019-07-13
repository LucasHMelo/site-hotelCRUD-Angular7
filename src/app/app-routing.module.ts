import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelSobreComponent } from './hotel-sobre/hotel-sobre.component';
import { HotelReservarComponent } from './hotel-reservar/hotel-reservar.component';
import { HotelInicioComponent } from './hotel-inicio/hotel-inicio.component';
import { HotelContatoComponent } from './hotel-contato/hotel-contato.component';
import { HotelAdminComponent } from './hotel-admin/hotel-admin.component';
import { HotelAcomodacaoComponent } from './hotel-acomodacao/hotel-acomodacao.component';
import { AdminComponent } from './admin/admin.component';
import { GetHospedeComponent } from './get-hospede/get-hospede.component';
import { EditHospedeComponent } from './edit-hospede/edit-hospede.component';
import { AddHospedeComponent } from './add-hospede/add-hospede.component';

const routes: Routes = [
{path: '', redirectTo: '/inicio', pathMatch: 'full'},
//{path: 'department/:id', component: DepartmentDetailComponent},
{path: 'inicio', component: HotelInicioComponent},
{path: 'sobre', component: HotelSobreComponent},
{path: 'reservar', component: HotelReservarComponent},
{path: 'contato', component: HotelContatoComponent},
{path: 'acomodacao', component: HotelAcomodacaoComponent},
{path: 'admin1', component: HotelAdminComponent},
{path: 'admin', component: GetHospedeComponent},
{path: 'admin/edit/:id', component: EditHospedeComponent},
{path: 'admin/create', component: AddHospedeComponent},
{path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AdminComponent,AddHospedeComponent,EditHospedeComponent,GetHospedeComponent,HotelAdminComponent,HotelAcomodacaoComponent,HotelInicioComponent, HotelSobreComponent,HotelReservarComponent,PageNotFoundComponent,HotelContatoComponent]
