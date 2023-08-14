import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Question } from '../../models/question';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() displayAnswer!: boolean;
  @Input() questionList!: Question[];
  @Input() totalCorrectAnswer!: number[];
  totalAnsweredQuestion: number = 0;
  @ViewChild('finalResultText') finalResultText!: ElementRef;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.totalAnsweredQuestion = 0;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.displayAnswer && this.questionList.length > 0) {
      const nativeElement = this.finalResultText.nativeElement;
      if (this.totalCorrectAnswer.length <= 1) {
        nativeElement.classList.add('red-label');
      } else if (
        this.totalCorrectAnswer.length > 1 &&
        this.totalCorrectAnswer.length <= 3
      ) {
        nativeElement.classList.add('yellow-label');
      } else if (this.totalCorrectAnswer.length > 3) {
        nativeElement.classList.add('green-label');
      }
    }
  }

  selectAnswer(i: number, answer: string) {
    if (this.displayAnswer == false) {
      if (!this.questionList[i].user_selected_answer) {
        this.totalAnsweredQuestion++;
      }
      this.questionList[i].user_selected_answer = answer;
      if (
        this.questionList[i].correct_answer ==
        this.questionList[i].user_selected_answer
      ) {
        this.totalCorrectAnswer.push(i);
      } else {
        const indexKey = this.totalCorrectAnswer.indexOf(i);
        if (indexKey > -1) {
          this.totalCorrectAnswer.splice(indexKey, 1);
        }
      }
    }
  }

  createNewQuiz() {
    localStorage.removeItem('question');
    localStorage.removeItem('totalCorrectAnswer');
    this.router.navigate(['']);
  }

  submitAnwser() {
    localStorage.setItem('question', JSON.stringify(this.questionList));
    localStorage.setItem(
      'totalCorrectAnswer',
      JSON.stringify(this.totalCorrectAnswer)
    );
    this.router.navigateByUrl('/result');
  }
}
