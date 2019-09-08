import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,

		LoginRoutingModule
	],
	declarations: [LoginComponent]
})
export class LoginModule {
}
