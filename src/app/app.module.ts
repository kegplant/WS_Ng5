import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';//<----

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
// import {DataService} from './data.service';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { GammaComponent } from './gamma/gamma.component'; // <-- Import HttpModule
// import {NumbersService} from './numbers.service';
// import {GoldService} from './Gold.service';
import {GitService} from './Git.service';
import {WeatherService} from './weather.service';
import { RouterModule } from '@angular/router/src/router_module';




@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule,
    HttpClientModule,
    AppRoutingModule, //<----
    // RouterModule
  ],
  providers: [GitService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
  