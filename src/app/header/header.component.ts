import { Component } from '@angular/core';

import { AuthenticationService } from '../login/authentication/authentication.service';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

	isLogged: boolean = false;

	constructor(private authenticationService: AuthenticationService) {

		this.authenticationService.isLoggedIn()
			.subscribe((logged) => {
				this.isLogged = logged;
			});
	}

	logout(): void {
		this.authenticationService.logout();
	}

}
