import {
  Component,
  OnInit
} from '@angular/core';
import {
  QnAService
} from '../qn-a.service';
import {
  Question
} from '../question';
import {
  Answer
} from '../answer';
import * as moment from "moment";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  questions: Question[]; //question class
  answers: Answer[];
  newAnswers: String[] = [];
  constructor(private _QnAService: QnAService) {}

  ngOnInit() {
    this._QnAService.init();
    this._QnAService.questions.subscribe(questions => this.questions = questions);
    this._QnAService.answers.subscribe(answers => this.answers = answers);
  }
  addVote(action: String, question: Question) { //a hack since we're not persisting data here; would use question id otherwise
    if (action === "plus") {      
      question.upvotes = String(1 + Number(question.upvotes || "0"));
    } else {
      question.downvotes = String(1 + Number(question.downvotes || "0"));
    }
    this._QnAService.updateAnswers(this.answers);
    this._QnAService.updateQuestions(this.questions);
  }
  addAnswer(index, Question_Id: String) {
    let newAnswer = {
      "Question-Id": Question_Id,
      Answer: this.newAnswers[index],
      created_at: moment().format("DD/MMM/YY HH:mm"),
      upvotes: "0",
      downvotes: "0",
    }
    this.answers.unshift(newAnswer);
    this.newAnswers[index] = "";
    this._QnAService.updateAnswers(this.answers);
  }
  toggleClass(e) {
    console.log(e.target.parentNode.parentNode.parentNode);
    e.target.parentNode.parentNode.parentNode.classList.toggle("small");
  }
}
