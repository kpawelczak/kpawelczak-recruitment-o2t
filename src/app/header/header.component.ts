import { Component, OnDestroy } from '@angular/core';

import { AuthenticationService } from '../login/authentication/authentication.service';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {

	isLogged: boolean = false;

	statusLoginSubscription: Subscription;

	constructor(private authenticationService: AuthenticationService) {
		this.checkLoginStatus();
	}

	ngOnDestroy() {
		this.statusLoginSubscription.unsubscribe();
	}

	checkLoginStatus(): void {
		this.statusLoginSubscription =
			this.authenticationService.isLoggedIn()
				.subscribe((logged) => {
					this.isLogged = logged;
				});
	}

	logout(): void {
		this.authenticationService.logout();
	}

}
