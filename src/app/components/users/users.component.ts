import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent{
  count = 0;
  counts = this.count++
  users;
  url = 'http://localhost:3000/users'


  constructor(private http: HttpClient) { 
       this.http.get(this.url).toPromise().then(data => {
         this.users = data;
       })
   }


}
