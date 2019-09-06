import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private router: Router) {

		this.loginForm = formBuilder.group({
			'username': ['', [Validators.required]],
			'password': ['', [Validators.required]]
		});
	}

	ngOnInit() {
	}

	login() {

		if (this.loginForm.invalid) {
			return
		}
		this.router.navigate(['content'])
	}

	autoFill() {
		this.loginForm.get('username').setValue('zkzjNzKa');
		this.loginForm.get('password').setValue('jCCmyTlxcFK6');
	}

}
