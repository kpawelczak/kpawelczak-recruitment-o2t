import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/service';

@Component({
	selector: 'app-login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

	loginForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private authenticateService: AuthenticationService,
				private router: Router) {

		this.loginForm = formBuilder.group({
			'username': ['', [Validators.required]],
			'password': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		localStorage.removeItem('token');
	}

	login(post) {

		if (this.loginForm.invalid) {
			return;
		}

		this.authenticateService.login(post.username, post.password);
		this.router.navigate(['content']);
	}

	autoFill() {
		this.loginForm.get('username').setValue('zkzjNzKa');
		this.loginForm.get('password').setValue('jCCmyTlxcFK6');
	}

}
