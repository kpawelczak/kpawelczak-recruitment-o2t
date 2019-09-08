import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ItemRoutingModule } from './item-routing.module';
import { ItemComponent } from './item.component';


@NgModule({
	imports: [
		CommonModule,
		ItemRoutingModule,

		ReactiveFormsModule,

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	declarations: [ItemComponent]
})
export class ItemModule {
}
