import { Component, OnInit, Input } from '@angular/core';
import { QnAService } from '../qn-a.service';
import {
  ActivatedRoute, Router
} from '@angular/router';

@Component({
  selector: 'app-feed-detail',
  templateUrl: './feed-detail.component.html',
  styleUrls: ['./feed-detail.component.css']
})
//      <div *ngIf="question.Id === Q_Id">
//</div><a href="/">Back</a></div>
export class FeedDetailComponent implements OnInit {
  // @Input() Q_Id;
  Q_Id;
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
      //date as well
    }
    this.answers.push(newAnswer);
    this.newAnswers[index]="";
  }
}
