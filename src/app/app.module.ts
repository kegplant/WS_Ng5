import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';//<----

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router/src/router_module';

import { FeedComponent } from './feed/feed.component';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';
import {QnAService} from './qn-a.service'


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    FeedDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    // RouterModule
  ],
  providers: [QnAService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
  