import { Routes } from '@angular/router';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	{ path: 'item', loadChildren: './item/item.module#ItemModule' },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];
