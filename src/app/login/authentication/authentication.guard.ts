import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';


@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

	constructor(public authenticationService: AuthenticationService, public router: Router) {
	}

	canActivate(): Observable<boolean> {

		return this.authenticationService.isLoggedIn()
				   .pipe(
					   tap((activated) => {
						   if (!activated) {
							   this.router.navigate(['login']);
						   }
					   })
				   );
	}
}
