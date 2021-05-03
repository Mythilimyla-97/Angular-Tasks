import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { }

  getAllUsers(){
    return [
      {id:1,name:'Mythili',designation:'Angular Developer',city:'Sivakasi',mobile:9876543210},
      {id:1,name:'Priya',designation:'PHP Developer',city:'Madurai',mobile:9876543210},
      {id:1,name:'Kavitha',designation:'Java Developer',city:'Chennai',mobile:9876543210},
      {id:1,name:'Roshini',designation:'Angular JS Developer',city:'Nellai',mobile:9876543210},
      {id:1,name:'Sandhya',designation:'Dot Net Developer',city:'Coimbatore',mobile:9876543210},
    ]
  }
  getUserApi(){
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}

