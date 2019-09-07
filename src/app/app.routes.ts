import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	{ path: 'content', loadChildren: './content-view/content-view.module#ContentViewModule' },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];
