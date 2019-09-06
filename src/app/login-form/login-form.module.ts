import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { LoginFormComponent } from './login-form.component';
import { MatButtonModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormRoutingModule } from './login-form-routing.module';

@NgModule({
	imports: [
		CommonModule,
		LoginFormRoutingModule,
		BrowserModule,
		BrowserAnimationsModule,
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		ReactiveFormsModule
	],
	declarations: [LoginFormComponent],
	exports: [LoginFormComponent]
})
export class LoginFormModule {
}
