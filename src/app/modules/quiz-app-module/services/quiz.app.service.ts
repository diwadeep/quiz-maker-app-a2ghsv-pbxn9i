import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environment/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Question, QuestionParams, QuestionResponse } from '../models/question';
import { Category, CategoryResponse } from '../models/category';

@Injectable({
  providedIn: 'root',
})

export class QuizAppService {
  private categoryApiUrl: string = environment.OPEN_API_URL + 'api_category.php';
  private questionApiUrl: string = environment.OPEN_API_URL + 'api.php';
  questionLevels: Array<string> = ['Easy', 'Medium', 'Hard'];
  questionAmountTotal: number = 5;
  questionType: string = 'multiple';

  constructor(private httpClient: HttpClient) {}

  getQuestionCategoryList(): Observable<Category[]> {
    return this.httpClient.get<CategoryResponse>(this.categoryApiUrl).pipe(
      map((response) => {
        return response.trivia_categories;
      }),
      catchError(this.handleErrorOnApis)
    );
  }

  getQuestionList(questionParams: QuestionParams): Observable<Question[]> {
    console.log(questionParams.category);
    const params = new HttpParams()
      .set('amount', this.questionAmountTotal.toString())
      .set('cateogry', questionParams.category.toLowerCase())
      .set('difficulty', questionParams.difficulty.toLowerCase())
      .set('type', this.questionType);

    return this.httpClient
      .get<QuestionResponse>(this.questionApiUrl, { params })
      .pipe(
        map((response) => {
          return this.transformQuestionResponse(response);
        }),
        catchError(this.handleErrorOnApis)
      );
  }

  private randomOrderArr(arr: string[]) {
    const shuffledArr = [...arr];
    for (let i = shuffledArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArr[i], shuffledArr[j]] = [
        shuffledArr[j],
        shuffledArr[i],
      ];
    }
    return shuffledArr;
  }

  private transformQuestionResponse(response: QuestionResponse): Question[] {
    return response.results.map((question) => {
      question.answer_options = this.randomOrderArr([
        ...question.incorrect_answers,
        question.correct_answer,
      ]);
      return { ...question };
    });
  }

  private handleErrorOnApis(error: HttpErrorResponse) {
    console.log(error);
    return throwError('Something went wrong, Please try again after sometime.');
  }
}
