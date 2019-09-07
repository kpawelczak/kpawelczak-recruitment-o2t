import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from './authentication/authentication.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent {

	loginForm: FormGroup;

	loginFailed: boolean = false;

	constructor(private formBuilder: FormBuilder,
				private authenticateService: AuthenticationService,
				private router: Router) {

		this.loginForm = formBuilder.group({
			'username': [['zkzjNzKa'], [Validators.required]],
			'password': [['jCCmyTlxcFK6'], [Validators.required]]
		});
	}

	get username() {
		return this.loginForm.controls['username'];
	}

	get password() {
		return this.loginForm.controls['password'];
	}

	login() {

		if (this.loginForm.invalid) {
			return;
		}

		const username = this.username.value.toString(),
			password = this.password.value.toString();

		this.authenticateService.login(username, password)
			.subscribe((response) => {
					this.loginFailed = false;
					this.router.navigate(['content']);
				},
				() => {
					this.loginFailed = true;
				}
			);
	}

}
