import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormModule } from './login-form/login-form.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { ContentViewModule } from './content-view/content-view.module';
import { AuthenticateComponent } from './authenticate/authenticate.component';


@NgModule({
	imports: [
		HttpClientModule,
		LoginFormModule,
		ContentViewModule,
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			useHash: false
		})
	],
	declarations: [
		AppComponent
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
