import { NgModule } from '@angular/core';
import {NgRomanNumberComponent } from './ng-roman-number-component.component';
import {BrowserModule} from "@angular/platform-browser";



@NgModule({
  declarations: [
    NgRomanNumberComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    NgRomanNumberComponent
  ]
})
export class NgRomanNumberComponentModule { }
