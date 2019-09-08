import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../login/authentication/authentication.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
	selector: 'app-content-view',
	templateUrl: './content-view.component.html'
})
export class ContentViewComponent implements OnInit {

	contentForm: FormGroup;

	items = [{ name: 'asaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa' },
		{ name: 'asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
		{ name: 'asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
		{ name: 'asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' }];

	constructor(private authenticationService: AuthenticationService,
				private formBuilder: FormBuilder) {

		this.contentForm = formBuilder.group({
			'name': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.getItems();
	}

	getItems(): void {
		// this.authenticationService.getItems()
		// 	.subscribe(
		// 		(items) =>
		// 			this.items = items
		// 	);
	}

	get name(): AbstractControl {
		return this.contentForm.controls['name'];
	}

	addItem(): void {

		if (this.contentForm.valid) {

			let comment = this.name.value.toString();

			this.items.push({ name: comment });
			this.contentForm.reset();
		}
	}


}
