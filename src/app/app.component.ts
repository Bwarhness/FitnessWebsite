import { Component, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';
import { ProgramService } from './services/program.service';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app';
  isCollapsed: boolean = true;
 
  collapsed(event: any): void {
    console.log(event);
  }
 
  expanded(event: any): void {
    console.log(event);
  }
  constructor( public login:LoginService, public programService: ProgramService, public _api:ApiService) {

  }
}
