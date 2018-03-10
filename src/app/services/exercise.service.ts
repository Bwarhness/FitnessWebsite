import { Injectable } from '@angular/core';
import { Exercise } from '../models/program.model';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';
@Injectable()
export class ExerciseService {
  apiUrl = '';

  SearchName = '';
  exercises: Exercise[] = new Array<Exercise>();
  Observable: any;

  constructor(private _http: Http, public toast:ToastrService, public _api:ApiService) {
    this.apiUrl = _api.Api + '/api/Exercise';
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
