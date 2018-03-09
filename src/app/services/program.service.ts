import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Program } from '../models/program.model';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ProgramService {
  apiUrl = 'http://fitnessapi.webdesk-dev.dk/api/program';
  SearchName = '';
  programs: any = [];
  selectedProgram: Program = new Program();
  constructor(private _http: HttpClient, public toast:ToastrService) {
  }
   getPrograms() {
    return this._http.get(this.apiUrl, {
      params: {
        programName: this.SearchName
      }}).map(response => {
      const programs = response;
      this.programs = programs;
      return programs;
    }).subscribe();
   }
   saveProgram(data) {
     this._http.post(this.apiUrl, data).subscribe(
       (suc:any) => {
         this.toast.success("Program Gemt")
          this.selectedProgram.Id = suc.Id
       },
       (error) => {
        this.toast.error("Fejl", error.error.error_description)
       }
     );
   }
   addProgram() {
     console.log(this.addProgram)
     this._http.post(this.apiUrl, this.selectedProgram).subscribe();
   }

  }
