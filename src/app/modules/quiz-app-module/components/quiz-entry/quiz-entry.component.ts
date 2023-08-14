import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Question, QuestionParams } from '../../models/question';
import { QuizAppService } from '../../services/quiz.app.service';

@Component({
  selector: 'app-quiz-entry',
  templateUrl: './quiz-entry.component.html',
  styleUrls: ['./quiz-entry.component.scss'],
})

export class QuizEntryComponent implements OnInit {
  
  difficultyLevelList: string[];
  questionCategoryList: Category[] = [];
  questionList: Question[] = [];
  quizForm: FormGroup;
  displayQuestion: boolean;
  
  constructor(
    private quizService: QuizAppService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildQuizForm();
    this.difficultyLevelList = this.quizService.questionLevels;
    this.getQuestionCategoryList();
  }

  buildQuizForm() {
    this.quizForm = this.formBuilder.group({
      categorySelect: ['', [Validators.required]],
      difficultyLevelSelect: ['', [Validators.required]],
    });
  }

  getQuestionCategoryList() {
    this.quizService.getQuestionCategoryList().subscribe(
      (response) => {
        this.questionCategoryList = response;
      },
      (error) => {
        console.log(error);
        alert("There is some problem occurred while fetching the question category list. Please try after some time.");
      }
    );
  }

  getQuestionList(params: QuestionParams) {
    this.quizService.getQuestionList(params).subscribe(
      (response) => {
        if (response.length > 0) {
          this.displayQuestion = true;
          this.questionList = response;
        }
      },
      (error) => {
        console.log(error);
        alert("There is some problem occurred while fetching the question list. Please try after some time.");
      }
    );
  }

  onSubmitQuizForm() {
    if (this.quizForm.valid) {
      const params = {
        category: this.quizForm.controls['categorySelect'].value,
        difficulty: this.quizForm.controls['difficultyLevelSelect'].value,
      };
      this.getQuestionList(params);
    }
  }
}
