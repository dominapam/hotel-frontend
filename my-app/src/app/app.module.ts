import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewCheckInComponent } from './new-check-in/new-check-in.component';
import { GuestConsultationComponent } from './guest-consultation/guest-consultation.component';

@NgModule({
  declarations: [
    AppComponent,
    NewCheckInComponent,
    GuestConsultationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
