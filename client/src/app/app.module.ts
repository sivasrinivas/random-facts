import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppComponent } from './app.component';
import { FactsComponent } from './facts/facts.component';
import { FactDetailComponent } from './fact-detail/fact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FactsComponent,
    FactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
