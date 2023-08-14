import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { ResultComponent } from './components/result/result.component';
import { QuizEntryComponent } from './components/quiz-entry/quiz-entry.component';
import { QuizAppModuleRoutingModule } from './quiz-app-module.routing.module';


@NgModule({
  declarations: [
    QuizEntryComponent,
    QuestionComponent,
    ResultComponent
  ],
  imports: [
    CommonModule,
    QuizAppModuleRoutingModule,
    ReactiveFormsModule
  ]
})
export class QuizModuleModule { }
