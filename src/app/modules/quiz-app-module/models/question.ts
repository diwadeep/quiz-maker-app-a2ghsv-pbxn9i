export interface QuestionResponse {
  results: Question[];
}


export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answer_options: string[];
  user_selected_answer: string;
}

export interface QuestionParams {
  category: string;
  difficulty: string;
}

