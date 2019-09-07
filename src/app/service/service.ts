import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'token'
		})
	};

	url = 'http://frontend-recruitment.one2tribe.pl:8080';

	constructor(private http: HttpClient) {
	}

	login(username: string, password: string) {
		return this.http.post(this.url + '/api/authenticate',
			{ username: username, password: password },
			{ observe: 'response' })

				   .subscribe(
					   (res) => {

						   const bearerHeader = res.headers.get('authorization'),
							   bearer = bearerHeader.split(' ');
						   localStorage.setItem('token', `${bearerHeader}`);
						   console.log(bearer[1]);

						   this.httpOptions.headers =
							   this.httpOptions.headers.set('Authorization', `${localStorage.getItem('token')}`);

					   });
	}

	getItems(): Observable<any> {
		return this.http.get(this.url + '/api/v1/item', this.httpOptions)
				   .pipe(
					   map((request) => {
						   return request;
					   })
				   );
	}

	addItem() {
		const name = JSON.stringify({ name: 'zkzjNzKa' });

		return this.http.post(this.url + '/api/v1/item', name, this.httpOptions)
				   .subscribe(
					   (res) => {
						   // Object.assign(res, name);
					   }
				   );
	}
}
