import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {FeedDetailComponent} from './feed-detail/feed-detail.component'
import {FeedComponent} from './feed/feed.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', component:FeedComponent },         //pathMatch: ‘full'
  { path: 'detail/:Q_Id', component: FeedDetailComponent},
  // {path:'**', redirectTo: '/'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 