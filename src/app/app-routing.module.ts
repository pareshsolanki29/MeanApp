import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuestionsIndexComponent } from './questions-index/questions-index.component';
import {LoginComponent} from './login/login.component';
import { QuestionsNewComponent } from './questions-new/questions-new.component';
import { QuestionsViewComponent } from './questions-view/questions-view.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'questions', component: QuestionsIndexComponent},
  {path: 'newquestion', component: QuestionsNewComponent},
  {path: 'viewquestions', component: QuestionsViewComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
