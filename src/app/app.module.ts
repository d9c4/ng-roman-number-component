import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgRomanNumberComponentModule} from "@d9c4/ng-roman-number-component";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgRomanNumberComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
