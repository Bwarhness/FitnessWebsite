import { Component, OnInit } from '@angular/core';
import { ProgramService } from '../services/program.service';
import { ExerciseService } from '../services/exercise.service';

import { Session, Exercise} from '../models/program.model';
@Component({
  selector: 'app-program-edit',
  templateUrl: './program-edit.component.html',
  styleUrls: ['./program-edit.component.scss']
})
export class ProgramEditComponent implements OnInit {
  sProgram: any;

  constructor(public programService: ProgramService, public exerciseService: ExerciseService) {
    this.sProgram = this.programService.selectedProgram;
   }
   addSession() {
     this.sProgram.Sessions.push(new Session());
     console.log(this.programService.selectedProgram);
   }
   saveProgram() {
     this.programService.saveProgram(this.sProgram);
     console.log(this.sProgram);
   }
   log(stuff) {
      console.log(stuff);
   }
   addExercise(session: Session) {
    session.Exercises.push(new Exercise('123', '123', 0, 1));
   }



  ngOnInit() {
  }

}
