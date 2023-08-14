import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizEntryComponent } from './components/quiz-entry/quiz-entry.component';
import { ResultComponent } from './components/result/result.component';

const routes: Routes = [
  { path: '', component: QuizEntryComponent },
  { path: 'result', component: ResultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuizAppModuleRoutingModule {}
