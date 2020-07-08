import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
<<<<<<< HEAD
=======
import { newArray } from '@angular/compiler/src/util';
>>>>>>> 08730b78e5e860b48980db9504737f83f0646b3b

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
<<<<<<< HEAD
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
=======
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
>>>>>>> 08730b78e5e860b48980db9504737f83f0646b3b

  constructor(private http: HttpClient) {

  }
  postuser() {
<<<<<<< HEAD
   return this.http.post<any>(this.url, this.user).toPromise().then(data => {
    this.errmsg = data;
    console.log(this.errmsg)
  })
  
  }
}


=======
    this.http.post(this.url, {
      headers: new HttpHeaders({
        'Content-Type': 'applicatin/json'
      })
    })

    
   
    
}

}
>>>>>>> 08730b78e5e860b48980db9504737f83f0646b3b
