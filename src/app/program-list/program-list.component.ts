import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ProgramService } from '../services/program.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.scss']
})
export class ProgramListComponent implements OnInit {
  constructor(public login: LoginService, private router: Router, public programService: ProgramService, public _api:ApiService) {
    this.programService.getPrograms() 
   }

  ngOnInit() {
  }
  getTrainingType(number){
    if (number == 0) {
      return "Styrke"
    }
    if (number == 10) {
      return "Størrelse"
    }
    if (number == 20) {
      return "Udholdenhed"
    }

  }
  getDifficulty(number){
    if (number == 0) {
      return "Begynder"
    }
    if (number == 10) {
      return "Advanceret"
    }
    if (number == 20) {
      return "Expert"
    }
  }

}
