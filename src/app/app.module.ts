import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ChartsModule} from "ng2-charts";
import {AngularFireModule} from "angularfire2";
import {AF} from "./providers/af";
import { LoginPageComponent } from './login-page/login-page.component';

import { HomePageComponent } from './home-page/home-page.component';
import { HeaderComponent } from './header.component';
import { SummaryComponent } from './summary/summary.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AddDataComponent } from './add-data/add-data.component';
import {routing} from "./app.routing";
import {UserService} from "./user.service";
import {DataService} from "./data.service";


export const firebaseConfig = {
  apiKey: "AIzaSyASr0-MZ3_dRDIYAJb7xhP6yk5frqNVK3s",
  authDomain: "smart-env-quality-monitor.firebaseapp.com",
  databaseURL: "https://smart-env-quality-monitor.firebaseio.com",
  storageBucket: "smart-env-quality-monitor.appspot.com",
  messagingSenderId: "272210879221"
};



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    HomePageComponent,
    HeaderComponent,
    SummaryComponent,
    TimelineComponent,
    AddDataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    routing
  ],
  providers: [AF, UserService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
