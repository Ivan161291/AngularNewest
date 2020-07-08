import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  errmsg = '';
  users = [];
    user = {
    username: '',
    fname: '',
    lname: '',
    email: '',
    password: ''
  }

  url = 'http://localhost:3000/users'

  constructor(private http: HttpClient) {

  }
  postuser() {
   return this.http.post<any>(this.url, this.user).toPromise().then(data => {
    this.errmsg = data;
    console.log(this.errmsg)
  })
  
  }
}


