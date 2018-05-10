import {
  Injectable
} from '@angular/core';
import {
  BehaviorSubject
} from 'Rxjs';
import {
  HttpClient
} from '@angular/common/http';
import {
  Question
} from './question';
import {
  Answer
} from './answer';
import * as moment from 'moment';

@Injectable()
export class QnAService {
  questions: BehaviorSubject < Question[] > = new BehaviorSubject([]);
  answers: BehaviorSubject < Answer[] > = new BehaviorSubject([]);
  constructor(private _http: HttpClient) {}
  init() {
    this.getQuestions();
    this.getAnswers();
  }
  getQuestions() {
    this._http.get("https://api.myjson.com/bins/dck5b").subscribe(
      (questions: {
        feed_questions: Question[]
      }) => {
        const sortedQuestions = sortByDate(questions.feed_questions);
        this.questions.next(sortedQuestions);
        // console.log(sortedQuestions);
      });
  }
  getAnswers() {
    this._http.get("https://api.myjson.com/bins/hildr").subscribe(
      (answers: {
        feed_answers: Answer[]
      }) => {
        const sortedAnswers = sortByDate(answers.feed_answers);
        this.answers.next(sortedAnswers);
        // console.log(sortedAnswers);
      });
  }

}

function sortByDate(entries) { //date format: 12/Apr/18 13:30
  return entries.sort((a, b) =>
    moment(a.created_at, "DD/MMM/YY HH:mm")
    .isBefore(moment(b.created_at, "DD/MMM/YY HH:mm")) ? 1 : -1
  )
}
