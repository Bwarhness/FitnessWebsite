import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ProgramService } from '../services/program.service';
import 'rxjs/add/operator/map';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  constructor(public login: LoginService, public programService: ProgramService) {
  }
  AddProgram() {
    alert("yo");
    this.programService.addProgram();
  }
  ngOnInit() {
  }

}
