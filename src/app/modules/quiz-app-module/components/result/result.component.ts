import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question';
import { Router } from '@angular/router';
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  questionList!: Question[];
  totalCorrectAnswer!: Number[];
  showAnswer: Boolean = true;

  constructor(private router: Router) {
    if (
      localStorage.hasOwnProperty('question') &&
      localStorage.hasOwnProperty('totalCorrectAnswer')
    ) {
      this.questionList = JSON.parse(localStorage.getItem('question') || '[]');
      this.totalCorrectAnswer = JSON.parse(
        localStorage.getItem('totalCorrectAnswer') || '[]'
      );
    } else {
      this.router.navigateByUrl('/');
    }
  }

  ngOnInit(): void {}
}
