import { Routes } from '@angular/router';
import { AuthenticationGuard } from './login/authentication/authentication.guard';

export const routes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginModule' },
	{ path: 'item', loadChildren: './item/item.module#ItemModule', canActivate:[AuthenticationGuard] },
	{ path: '**', redirectTo: 'login', pathMatch: 'full' }
];
