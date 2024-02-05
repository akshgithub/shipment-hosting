import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShipmentComponent } from './shipment/shipment.component';
import { ShipmentsummaryComponent } from './shipmentsummary/shipmentsummary.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'shipment',
    component: ShipmentComponent
  },
  {
    path: 'shipmentsummary',
    component: ShipmentsummaryComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
