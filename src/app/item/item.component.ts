import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ItemService } from './item.service';


@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit {

	contentForm: FormGroup;

	itemsLoaded: boolean = true;

	items: Array<object> = [];

	constructor(private itemService: ItemService,
				private formBuilder: FormBuilder) {

		this.contentForm = formBuilder.group({
			'item': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.getItems();
	}

	get item(): AbstractControl {
		return this.contentForm.controls['item'];
	}

	getItems(): void {
		this.itemService.getItems()
			.subscribe(
				(items) => {
					this.items = items;
				},
				() => {
					this.itemsLoaded = false;
				}
			);
	}

	// addItem(): void {
	//
	// 	if (this.contentForm.valid) {
	//
	// 		let comment = this.name.value.toString();
	//
	// 		this.items.push({ name: comment });
	// 		this.contentForm.reset();
	//
	// 	}
	// }

	addItem(): void {
		if (this.contentForm.valid) {
			let item = this.item.value.toString();

			this.itemService.addItem(item)
				.subscribe(
					{ error: (error) => console.log(error) }
				);
		}
	}

}
