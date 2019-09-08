import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuthenticationService } from '../login/authentication/authentication.service';


@Injectable({ providedIn: 'root' })
export class ItemService {

	private readonly url: string = 'http://frontend-recruitment.one2tribe.pl:8080';

	private httpOptions;

	private isLogged: boolean = false;

	constructor(private http: HttpClient,
				private authenticationService: AuthenticationService) {

		this.authenticationService.isLoggedIn().subscribe(
			(logged) => {
				this.isLogged = logged;
				this.httpOptions = this.authenticationService.getHttpOptions();
			}
		);

	}

	getItems(): Observable<any> {

		this.isLoggedIn();

		return this.http.get(this.url + '/api/v1/item', this.httpOptions)
				   .pipe(
					   map((request) => {
						   return request;
					   })
				   );
	}

	addItem(item: string): Observable<any> {

		this.isLoggedIn();

		const postItem = JSON.stringify({ name: `${item}` });

		return this.http.post('this.url' + '/api/v1/item', undefined, this.httpOptions);
	}

	private isLoggedIn() {
		if (!this.isLogged) {
			return throwError('not logged in');
		}
	}
}
