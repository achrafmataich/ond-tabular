import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {OndTabularModule} from "../../../outsiderninjadevs/tabular";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    OndTabularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
