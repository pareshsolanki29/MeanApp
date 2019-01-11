import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionsModule} from './questions/questions.module';


import {AccountModule} from './account/account.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccountModule,
    QuestionsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
