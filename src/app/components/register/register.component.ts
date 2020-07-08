import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  users = [];
  user = {
    uname: '',
    fname: '',
    lname: '',
    email: '',
    pass: '',
    roll: 1
  }

  url = 'http://localhost:3000/users'+this.user.uname+this.user.fname+this.user.lname+this.user.email+this.user.pass+this.user.roll

  constructor(private http: HttpClient) {

  }
  postuser() {
    this.http.post(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'applicatin/json'
      })
    })

    
   
    
}

}
