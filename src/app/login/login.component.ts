import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AuthenticationService } from './authentication/authentication.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnDestroy {

	loginForm: FormGroup;

	loginFailed: boolean = false;

	loginSubscription: Subscription;

	constructor(private formBuilder: FormBuilder,
				private authenticateService: AuthenticationService,
				private router: Router) {

		this.loginForm = formBuilder.group({
			'username': ['', [Validators.required]],
			'password': ['', [Validators.required]]
		});
	}

	ngOnDestroy() {
		this.loginSubUnsubscribe();
	}

	get username(): AbstractControl {
		return this.loginForm.controls['username'];
	}

	get password(): AbstractControl {
		return this.loginForm.controls['password'];
	}

	login(): void {

		if (this.loginForm.invalid) {
			return;
		}

		const username = this.username.value.toString(),
			password = this.password.value.toString();

		this.loginSubscription =
			this.authenticateService.login(username, password)
				.subscribe(() => {
						this.router.navigate(['item']);
					},
					() => {
						this.loginFailed = true;
					}
				);
	}

	loginSubUnsubscribe() {
		if (this.loginSubscription) {
			this.loginSubscription.unsubscribe();
		}
	}

}
