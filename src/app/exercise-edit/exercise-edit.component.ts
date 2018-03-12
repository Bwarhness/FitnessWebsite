import { Component, OnInit, ViewChild } from '@angular/core';
import { ExerciseService } from '../services/exercise.service';
import { Exercise } from '../models/program.model';

@Component({
  selector: 'app-exercise-edit',
  templateUrl: './exercise-edit.component.html',
  styleUrls: ['./exercise-edit.component.scss']
})
export class ExerciseEditComponent implements OnInit {
  @ViewChild('exerciseForm') form;
  model = {
    'Name': '',
    'Difficulty': 0,
    'Description' : '',
    'Type': 0,
    'VideoUrl' : ''
  };
  constructor(public exerciseService: ExerciseService  ) {
console.log(exerciseService.exercises)
  }
  selectExercise(data) {
    console.log(data);
    this.form.setValue(data);
  }
  onSubmit(newExercise) {
    console.log(newExercise.value);
    this.exerciseService.addExercise(newExercise.value);
    newExercise.form.reset();
  }
  ngOnInit() {
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
