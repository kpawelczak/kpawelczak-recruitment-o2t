import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';

import { AuthenticationService } from './authentication/authentication.service';


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {

	loginForm: FormGroup;

	loginFailed: boolean = false;

	loginSubscription: Subscription;
	loggedInSubscription: Subscription;

	constructor(private formBuilder: FormBuilder,
				private authenticateService: AuthenticationService,
				private router: Router) {

		this.loginForm = formBuilder.group({
			'username': ['', [Validators.required]],
			'password': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.isLogged();
	}

	ngOnDestroy() {
		this.unsubscribe(this.loginSubscription);
		this.unsubscribe(this.loggedInSubscription);
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

	isLogged(): void {
		this.authenticateService.isLoggedIn()
			.subscribe(
				(loggedIn) => {
					if (loggedIn) {
						this.router.navigate(['item']);
					}
				}
			);
	}

	private unsubscribe(subscription: Subscription): void {
		if (subscription) {
			subscription.unsubscribe();
		}
	}

}
