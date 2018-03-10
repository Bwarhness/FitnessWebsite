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
   }

  ngOnInit() {
  }

}
