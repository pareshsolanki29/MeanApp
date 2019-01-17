import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsIndexComponent } from '../questions-index/questions-index.component';
import { QuestionsViewComponent } from '../questions-view/questions-view.component';
import { QuestionsNewComponent } from '../questions-new/questions-new.component';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    QuestionsIndexComponent,
    QuestionsViewComponent,
    QuestionsNewComponent,
  ],
  exports: [
    QuestionsIndexComponent,
    QuestionsViewComponent,
    QuestionsNewComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,

  ]
})
export class QuestionsModule { }
