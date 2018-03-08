import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public login: LoginService, public http:HttpClient, public _api:ApiService) {
    this.login.loggedIn = false;
   }

  ngOnInit() {
  }
  logIn(form){
    console.log(form);
    let data = "username="+form.value.email+"&password="+form.value.password+"&grant_type=password"
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'})
    return this.http.post(this._api.Api + "/token", data, {headers:reqHeader}).map(p => {
      alert("yay");
      this._api.Token = p
    })
  }
}
