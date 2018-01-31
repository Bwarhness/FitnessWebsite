import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { IndexComponent } from './index/index.component';
import { LoginService } from './login.service';
import { ProgramService } from './program.service';
import { HttpModule } from '@angular/http';
import { ProgramEditComponent } from './program-edit/program-edit.component';
import { ExerciseEditComponent } from './exercise-edit/exercise-edit.component';
import { ExerciseService } from './exercise.service';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';
const appRoutes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'program-list', component: ProgramListComponent },
  { path: 'program', component: ProgramEditComponent },
  { path: 'exercise', component: ExerciseEditComponent },
  { path: '',
    redirectTo: '/index',
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
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
    appRoutes,
  { enableTracing: false } // <-- debugging purposes only
),
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [LoginService, ProgramService, ExerciseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
