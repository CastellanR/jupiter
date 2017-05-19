import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { apiConfig } from '../config';
import { makeUrl } from '../utils';
import { AuthToken, Account } from '../models';

@Injectable()
export class AccountService {
  private authToken: string;
  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = makeUrl(apiConfig.host, apiConfig.version, 'account');

    if(localStorage.getItem('authToken')) {
      this.authToken = localStorage.getItem('authToken');
    }
  }

  get token(): string {
    return this.authToken;
  }

  login(email: string, password: string): Observable<AuthToken> {
    const headers = this.baseHeaders();
    const body = JSON.stringify({email, password});

    return this.http
      .post(makeUrl(this.endpoint, 'login'), body, {headers})
      .map((res: Response) => {
        return res.json();
      })
      .map((res: AuthToken) => {
        if(res.authToken) {
          localStorage.setItem('authToken', res.authToken);
        }

        return res;
      });
  }

  logout() {
    localStorage.removeItem('authToken');
    this.authToken = null;
  }

  getDetails(): Observable<Account> {
    const headers = this.baseHeaders([{
      header: 'Authorization',
      value: this.authToken
    }]);

    return this.http.get(makeUrl(this.endpoint), {headers})
      .map((res: Response) => {
        return res.json();
      });
  }

  private baseHeaders(extraHeaders?: {header: string, value: string}[]): Headers {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    if(extraHeaders && extraHeaders.length > 0) {
      extraHeaders.forEach(header => headers.set(header.header, header.value));
    }

    return headers;
  }

}
