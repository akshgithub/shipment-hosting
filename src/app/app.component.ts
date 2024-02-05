import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListService } from './list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: any;
  opened=false;

  orderno: string = '';
  shipment: string = '';
  firstname: string= '';
  lastname: string= '';
  emailid: string= '';
  phonenumber: string= '';
  listService: any;

  constructor() {}

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.listService.getList().subscribe((_data: any)=> {
      this.orderno = _data.orderNo;
      this.shipment = _data.shipment;
      this.firstname = _data.firstName;
      this.lastname = _data.lastName;
      this.emailid = _data.emailId;
      this.phonenumber = _data.phoneNumber;
    });
  }


}
