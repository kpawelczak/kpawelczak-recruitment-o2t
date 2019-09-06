import { NgModule } from '@angular/core';
import { ContentViewComponent } from './content-view.component';
import { RouterModule } from '@angular/router';

const routes = [{
	path: 'content',
	component: ContentViewComponent
}];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	]
})
export class ContentViewRoutingModule {
}
