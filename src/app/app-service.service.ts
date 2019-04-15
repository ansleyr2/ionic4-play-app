import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { User } from './models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }

  getData(){
    const connectionUrl = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(connectionUrl).pipe(map((users:any[]) =>{
      return users.map((user)=> {
        const name = user.name;
        const email = user.email;
        const address = user.address.suite+", "+user.address.street+", "+user.address.city+", "+user.address.zipcode;
        return new User(name, email, address);
      });
    }),
    catchError(err => of([]))
    )
  }

  getDataById(userId: String){
    const connectionUrl = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get(connectionUrl).pipe(map((user: any) =>{
      //console.log(user);
      const name = user.name;
      const email = user.email;
      const address = user.address.suite+", "+user.address.street+", "+user.address.city+", "+user.address.zipcode;
      return [new User(name, email, address)];
      
    }),
    catchError(err => of([]))
    )
  }
}
