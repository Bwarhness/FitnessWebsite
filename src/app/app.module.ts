import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { IndexComponent } from './index/index.component';
import { LoginService } from './services/login.service';
import { ProgramService } from './services/program.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ProgramEditComponent } from './program-edit/program-edit.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { ExerciseService } from './services/exercise.service';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
import { ApiService } from './services/api.service';
import { LoadingModule } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent, canActivate: [LoginService]  },
  { path: 'login', component: LoginComponent },
  { path: 'program-list', component: ProgramListComponent, canActivate: [LoginService]  },
  { path: 'program', component: ProgramEditComponent, canActivate: [LoginService]  },
  { path: 'exercise', component: ExerciseEditComponent, canActivate: [LoginService]  },
  { path: '',
    redirectTo: '/program-list',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProgramListComponent,
    IndexComponent,
    ProgramEditComponent,
    ExerciseEditComponent,
    FilterPipe,
    SortPipe
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    LoadingModule,
    HttpClientModule,    
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    appRoutes,
  { enableTracing: false } // <-- debugging purposes only
),
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [LoginService, ProgramService, ExerciseService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
