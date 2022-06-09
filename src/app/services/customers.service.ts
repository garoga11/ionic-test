import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }
  allCustomers = [
    {
      "id": 1,
      "name": "Ricardo Lopez"
    },
    {
      "id": 2,
      "name": "Sofia Manrriquez"
    },
    {
      "id": 3,
      "name": "Karla Manrri"
    },
    {
      "id": 4,
      "name": "Erick Moreno"
    },
    {
      "id": 5,
      "name": "Carlos Perez"
    },
  ]

  public getCustomers(){
    return this.allCustomers
  }
}