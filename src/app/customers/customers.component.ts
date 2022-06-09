import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../services/customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  public allCustomers: any;

  constructor(public CustomersService: CustomersService) { }

  ngOnInit(): void {
    this.allCustomers = this.CustomersService.getCustomers();
  }

}
