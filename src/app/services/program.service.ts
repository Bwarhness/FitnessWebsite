import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Program } from '../models/program.model';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from './api.service';

@Injectable()
export class ProgramService {
  apiUrl = '';
  SearchName = '';
  programs: any = [];
  selectedProgram: Program = new Program();
  constructor(private _http: HttpClient, public toast:ToastrService, public _api:ApiService) {
    this.apiUrl = _api.Api + '/api/program';
  }
   getPrograms() {
    return this._http.get(this.apiUrl, ).map(response => {
      const programs = response;
      this.programs = programs;
      return programs;
    }).subscribe();
   }
   saveProgram(data) {
     this._http.post(this.apiUrl, data).subscribe(
       (suc:any) => {
         this.toast.success("Program Gemt")
          this.selectedProgram = new Program();
       },
       (error) => {
        this.toast.error("Fejl", error.error.error_description);
       }
     );
   }
   addProgram() {
     console.log(this.addProgram)
     this._http.post(this.apiUrl, this.selectedProgram).subscribe();
   }

  }
