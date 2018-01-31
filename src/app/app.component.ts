import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ProgramService } from './program.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'app';

  constructor( public login:LoginService, public programService: ProgramService) {
    console.log(this.programService.getPrograms());

  }
}
