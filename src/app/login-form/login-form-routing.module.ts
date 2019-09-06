import { LoginFormComponent } from './login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

const routes =[{
	path:'login',
	component: LoginFormComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	]
})
export class LoginFormRoutingModule {

}
