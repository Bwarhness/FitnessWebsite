import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
loading = false;
errorMessage = '';
  constructor(public _api: ApiService, public toast: ToastrService, public router:Router) { }

  ngOnInit() {
  }
  register(data) {
    console.log(data);
    this.loading = true;
    this._api.generateHTTPPost('/api/Account/register', data.value).subscribe(
      (response) => {
        this.toast.success('Din bruger er nu blevet oprettet', 'Bruger oprettet');
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);
        if (error.error.ModelState) {
        this.toast.warning( "Bruger eksistere allerede", 'Fejl!');
        }
        else{
        this.toast.warning( error.error.error_description, 'Fejl!');          
        }
        this.errorMessage = error.error.error_description;
      },
      () => {
        this.loading = false;
      }
    );
  }
}
