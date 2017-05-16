import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { apiConfig } from '../config';
import { makeUrl } from '../utils';
import { AuthToken } from '../models';

@Injectable()
export class AccountService {
  private authToken: string;
  private endpoint: string;

  constructor(private http: Http) {
    this.endpoint = makeUrl(apiConfig.host, apiConfig.version, 'account');
  }

  login(email: string, password: string): Observable<AuthToken> {
    const [body, headers] = this.makeRequest({email, password});

    return this.http.post(makeUrl(this.endpoint, 'login'), body, {headers})
      .map((res: Response) => {
        return res.json();
      });
  }

  private makeRequest(body: any): [string, Headers] {
    const headers = new Headers();
    headers.set('Content-Type', 'application/json')
    headers.set('Accept', 'application/json')

    return [JSON.stringify(body), headers];
  }

}
