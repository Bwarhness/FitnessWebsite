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

  constructor( public login:LoginService, public programService: ProgramService, public _api:ApiService) {
    console.log(this.programService.getPrograms());

  }
}
