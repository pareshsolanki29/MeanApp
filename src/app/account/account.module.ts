import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent} from '../home/home.component';
import {LoginComponent} from '../login/login.component';
import { RegisterComponent} from '../register/register.component';
import {FormsModule} from '@angular/forms';
import { CategoriesComponent } from './categories/categories.component';
import {DurationPipe} from '../duration.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesComponent,
    DurationPipe,
  ],
  exports: [HomeComponent, LoginComponent, RegisterComponent ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class AccountModule { }
