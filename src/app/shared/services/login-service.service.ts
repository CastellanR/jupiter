import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: Http) { }

  login(email: string, password: string): Observable<{authToken: string}> {
    const body = {email, password};

    return this.http.post('http://localhost:8000/v1/account/login', JSON.stringify(body))
      .map((res: Response) => {
        return res.json();
      });
  }

}
