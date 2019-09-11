import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  

import { AppComponent } from './app.component';
import { ChildTextboxComponent } from './child-textbox/child-textbox.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildTextboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
