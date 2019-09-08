import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

	private loggedIn$ = new BehaviorSubject(false);

	private httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'token'
		})
	};

	private readonly url: string = 'http://frontend-recruitment.one2tribe.pl:8080';

	constructor(private http: HttpClient,
				private router: Router) {
		this.addTokenToHeader();
	}

	login(username: string, password: string): Observable<any> {
		return this.http.post(this.url + '/api/authenticate',
			{ username: username, password: password },
			{ observe: 'response' })
				   .pipe(
					   tap((res) => {
						   const bearerHeader = res.headers.get('authorization');
						   localStorage.setItem('token', `${bearerHeader}`);

						   this.httpOptions.headers =
							   this.httpOptions.headers.set('Authorization', `${localStorage.getItem('token')}`);
						   this.loggedIn$.next(true);
					   })
				   );
	}

	logout(): void {
		this.loggedIn$.next(false);
		localStorage.removeItem('token');
		this.router.navigate(['login']);
	}

	isLoggedIn(): Observable<boolean> {
		return this.loggedIn$.asObservable();
	}

	getHttpOptions() {
		return this.httpOptions;
	}

	private addTokenToHeader(): void {
		if (localStorage.getItem('token')) {
			this.httpOptions.headers =
				this.httpOptions.headers.set('Authorization', `${localStorage.getItem('token')}`);
		}
	}

}
