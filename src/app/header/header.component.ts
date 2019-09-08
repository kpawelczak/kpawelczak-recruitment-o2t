import { Component } from '@angular/core';

import { AuthenticationService } from '../login/authentication/authentication.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	constructor(private authenticationService: AuthenticationService) {
	}

	logout() {
		if (localStorage.getItem('token')) {
			this.authenticationService.logout();
		}
	}

	isLoggedIn() {
		if (localStorage.getItem('token')) {
			return 'logout';
		} else {
			return 'sign in';
		}
	}

}
