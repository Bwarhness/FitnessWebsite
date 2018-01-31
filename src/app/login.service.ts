import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
loggedIn: boolean = false;
  constructor() { }

  logIn(){
    this.loggedIn = true;
  }
}
