import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }
  allUsers = [
    {
      "id": 1,
      "name": "Daniel Smith"
    },
    {
      "id": 2,
      "name": "Liliana Dominguez"
    },
    {
      "id": 3,
      "name": "Joaquin Zuñiga"
    },
    {
      "id": 4,
      "name": "Juan Moreno"
    },
    {
      "id": 5,
      "name": "Hector Catrejon"
    },
  ]

  public getUsers(){
    return this.allUsers
  }
}
