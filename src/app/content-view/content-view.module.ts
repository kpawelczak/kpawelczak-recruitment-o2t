import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ContentViewRoutingModule } from './content-view-routing.module';
import { ContentViewComponent } from './content-view.component';


@NgModule({
	imports: [
		CommonModule,
		ContentViewRoutingModule,

		ReactiveFormsModule,

		MatFormFieldModule,
		MatInputModule,
		MatButtonModule
	],
	declarations: [ContentViewComponent]
})
export class ContentViewModule {
}
