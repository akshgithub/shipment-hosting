import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { MatSidenavContainer } from '@angular/material/sidenav';

@Component({
  selector: 'app-shipment',
  templateUrl: './shipment.component.html',
  styleUrls: ['./shipment.component.css']
})
export class ShipmentComponent implements OnInit {

  shipmentResults: any[] = [];
  selectedShipment: any;

  constructor(private BreakpointObserver: BreakpointObserver){}

  ngOnInit(): void {
    this.shipmentResults = [
      { order: 'PICK1000001', shipment: 'PICK1000001SHPNO', firstname:'Jhon', lastname:'Parks', emailid:'john@example.com', phonenumber:'1234567890' },
      { order: 'PICK1000002', shipment: 'PICK1000002SHPNO', firstname:'Abby', lastname:'Doyle', emailid:'adoyle@example.com', phonenumber:'6478390821' },
      
    ];

    //using breakpointObserver to detect screen size changes
    this.BreakpointObserver.observe([
      Breakpoints.Handset,
      Breakpoints.Tablet,
      Breakpoints.Web
    ]).subscribe((result: { matches: any; breakpoints: { [x: string]: any; }; }) => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.Handset]) {
          console.log('Handset (mobile) view');
        }
        if (result.breakpoints[Breakpoints.Tablet]) {
          console.log('Tablet view');
        }
        if (result.breakpoints[Breakpoints.Web]) {
          console.log('Web (desktop) view');
        }
      }
    });
  }

  viewDetails(shipment: any): void {
    this.selectedShipment = shipment;
    console.log('Viewing details for shipment:', shipment);
  }

  
}
