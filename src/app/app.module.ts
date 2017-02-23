import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ListComponent} from "./list-component";
import {UserFilterPipe} from "./user-filter.pipe";
import {UserDetailComponent} from "./user-detail.component";
import {WelcomComponent} from "./welcom.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    UserFilterPipe,

  

    ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FormsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
