import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';

import { AppComponent } from './app.component';
import { NewCheckInComponent } from './new-check-in/new-check-in.component';
import { GuestConsultationComponent } from './guest-consultation/guest-consultation.component';
import { AddGuestComponent } from './add-guest/add-guest.component';

@NgModule({
	declarations: [
		AppComponent,
		NewCheckInComponent,
		GuestConsultationComponent,
		AddGuestComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		ButtonModule,
		CheckboxModule,
		InputTextModule,
		PanelModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
