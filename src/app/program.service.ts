import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Program } from './models/program.model';

@Injectable()
export class ProgramService {
  apiUrl = 'http://localhost:50590/api/program';
  SearchName = '';
  programs: any = [];
  selectedProgram: Program = new Program();
  constructor(private _http: Http) {
  }
   getPrograms() {
    return this._http.get(this.apiUrl, {
      params: {
        programName: this.SearchName
      }}).map(response => {
      const programs = response.json();
      this.programs = programs;
      return programs;
    }).subscribe();
   }
   addProgram() {
     this._http.post(this.apiUrl, {'value': '10'}).subscribe();
   }

}
