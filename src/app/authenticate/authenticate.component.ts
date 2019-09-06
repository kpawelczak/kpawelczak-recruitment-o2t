import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	selector: 'app-authenticate',
	templateUrl: './authenticate.component.html',
	styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'token'
		})
	};

	constructor(private http: HttpClient) {
	}

	ngOnInit() {
		localStorage.removeItem('token');
	}

	login() {
		return this.http.post('http://frontend-recruitment.one2tribe.pl:8080/api/authenticate',
			{ username: 'zkzjNzKa', password: 'jCCmyTlxcFK6' },
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

	getItems() {
		this.http.get('http://frontend-recruitment.one2tribe.pl:8080/api/v1/item', this.httpOptions)
			.subscribe(
				(res) => {
					const item = JSON.stringify(res);

					console.log(res);
				}
			);
	}

	addItem() {
		const name = JSON.stringify({ name: 'zkzjNzKa' });

		return this.http.post('http://frontend-recruitment.one2tribe.pl:8080/api/v1/item', name, this.httpOptions)
				   .subscribe(
					   (res) => {
						   Object.assign(res, name);
					   }
				   );
	}
}
