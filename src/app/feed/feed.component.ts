import { Component, OnInit } from '@angular/core';
import { QnAService } from '../qn-a.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  questions: {}[];//question class
  answers: {}[];
  newAnswers: String[]=[];
  constructor(private _QnAService: QnAService, private router: Router,) { }

  ngOnInit() {
    this._QnAService.init();
    this._QnAService.questions.subscribe(questions=>this.questions=questions);
    this._QnAService.answers.subscribe(answers=>this.answers=answers);
  }
  addVote(action,question){//a hack since we're not persisting data here; would use question id otherwise
  if(action==="plus"){
      question.upvotes = String(1+Number(question.upvotes||"0"));
    }else{
      question.downvotes = String(1+Number(question.downvotes||"0"));
    }
  }
  addAnswer(index, Question_Id){
    let newAnswer={
      "Question-Id": Question_Id,
      Answer: this.newAnswers[index],
      created_at: moment().format("DD/MMM/YY HH:mm")
      //date as well
    }
    this.answers.unshift(newAnswer);
    this.newAnswers[index]="";
  }
//moment("12/Apr/18 13:30","DD/MMM/YY HH:mm")
}
