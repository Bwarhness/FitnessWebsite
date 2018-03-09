import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loading:boolean = false;
errorMessage = "";
  constructor(public login: LoginService, public http:HttpClient, public _api:ApiService, public router:Router) {
    this._api.Token = "";
   }

  ngOnInit() {
  }
  logIn(form){
    this.loading = true
    this.login.logIn(form.value.email,form.value.password).subscribe(
      (Token) => {
        
        this.loading = false;
        this.errorMessage = "";
        this.router.navigate(['/program-list']);
        
      },
      (data) => {
        this.loading = false;
        this.errorMessage = data.error.error_description;
        console.log(data);
      }
    )
  }
}
