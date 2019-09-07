import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../login/authentication/authentication.service';


@Component({
	selector: 'app-content-view',
	templateUrl: './content-view.component.html',
	styleUrls: ['./content-view.component.scss']
})
export class ContentViewComponent implements OnInit {

	items;

	constructor(private authenticationService: AuthenticationService) {
	}

	ngOnInit() {
		this.getItems();
	}

	getItems() {
		this.authenticationService.getItems()
			.subscribe(
				(items) =>
					this.items = items
			);
	}

	logout() {
		this.authenticationService.logout();
	}
}
