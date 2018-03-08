import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ApiService } from './api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class LoginService implements CanActivate {

loggedIn: boolean = false;
  constructor( private router: Router, public http:HttpClient, public _api:ApiService ) { }
=======
loggedIn: boolean = true;
  constructor( private router: Router) { }
>>>>>>> bbe2db736d232f6f8d1eb469359935ff634c9466:src/app/login.service.ts

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.loggedIn = true;
    if (this.loggedIn) {
      return true;
    } else {
      this.router.navigate(['/login'], {
        queryParams: {
          return: state.url
        }
      });
      return false;
    }
  }

  logIn(name, password){
    let data = "username="+name+"&password="+password+"&grant_type=password"
    var reqHeader = new HttpHeaders({'Content-Type':'application/x-www-urlencoded'})
    return this.http.post(this._api.Api + "/token", data, {headers:reqHeader}).map(p => {
      
      this._api.Token = p
    })
  }
}
