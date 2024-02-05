import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ShipmentComponent} from '../shipment/shipment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  SearchTextChange: any;
  
  resetForm(my_form: NgForm)
  {
    my_form.resetForm();
  }

  ngOnInit(): void {
  }

}
