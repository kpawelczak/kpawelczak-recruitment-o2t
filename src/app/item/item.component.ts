import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

import { ItemService } from './item.service';
import { Item } from './item';
import { Subscription } from 'rxjs';


@Component({
	selector: 'app-item',
	templateUrl: './item.component.html'
})
export class ItemComponent implements OnInit, OnDestroy {
	@ViewChild('itemNgForm')
	itemNgForm: NgForm;

	itemForm: FormGroup;

	itemsLoaded: boolean = true;

	itemWasNotAdded: boolean = false;

	items: Array<Item> = [];

	private getItemSubscription: Subscription;
	private addItemSubscription: Subscription;

	constructor(private itemService: ItemService,
				private formBuilder: FormBuilder) {

		this.itemForm = formBuilder.group({
			'item': ['', [Validators.required]]
		});
	}

	ngOnInit() {
		this.getItems();
	}

	ngOnDestroy() {
		this.unsubscribeFromSubscriptions();
	}

	get item(): AbstractControl {
		return this.itemForm.controls['item'];
	}

	getItems(): void {
		this.getItemSubscription =
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

	addItem(): void {
		if (this.itemForm.valid) {
			let item = this.item.value.toString();

			this.addItemSubscription =
				this.itemService.addItem(item)
					.subscribe(
						() => {
							this.itemWasNotAdded = false;
							this.itemNgForm.resetForm();
							this.getItems();
						},
						() => this.itemWasNotAdded = true
					);
		}
	}

	unsubscribeFromSubscriptions(): void {
		this.getItemSubscription.unsubscribe();

		if (this.addItemSubscription) {
			this.addItemSubscription.unsubscribe();
		}
	}

}
