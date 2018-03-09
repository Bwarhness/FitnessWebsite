import { Injectable } from '@angular/core';
import { Exercise } from '../models/program.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class ExerciseService {
  apiUrl = 'http://fitnessapi.webdesk-dev.dk/api/Exercise';

  SearchName = '';
  exercises: Exercise[] = new Array<Exercise>();
  Observable: any;

  constructor(private _http: Http, public toast:ToastrService) {
    this.getExercises().subscribe((data: Exercise[]) => {
      this.exercises = data;
    });

  }
  public getExercises() {
    return this._http.get(this.apiUrl).map(response => {
      const exercises = response.json();
      this.exercises = exercises;
      return exercises;
    });
  }
  deleteExercise(Id) {
    this._http.delete(this.apiUrl + '/' + Id).subscribe(
      suc => {
        this.toast.success("Øvelse slettet")
        this.getExercises().subscribe();
      }
    );

  }
  addExercise(data) {
    this._http.post(this.apiUrl, data).subscribe(
      suc => {
        this.toast.success("Øvelse gemt")        
        this.getExercises().subscribe();
      }
    );
  }
}
