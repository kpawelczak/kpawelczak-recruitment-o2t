import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentViewRoutingModule } from './content-view-routing.module';
import { ContentViewComponent } from './content-view.component';

@NgModule({
	imports: [
		CommonModule,
		ContentViewRoutingModule
	],
	declarations: [ContentViewComponent]
})
export class ContentViewModule {
}
