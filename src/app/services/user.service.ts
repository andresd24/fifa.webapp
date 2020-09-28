import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Credentials } from '../models/credentials';

@Injectable()
export class UserService {
  public url: String;
  public identity: any;
  public token: string;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(user_to_register) {
    const params = JSON.stringify(user_to_register);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this._http
      .post(this.url + 'register', params, { headers: headers })
      .pipe(map((res: any) => res));
  }

  signin(user_to_login: Credentials, get_token = null) {
    if (get_token != null) {
        user_to_login.gettoken = get_token;
    }

    const params = JSON.stringify(user_to_login);
    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this._http.post(this.url + 'login', params, {headers: headers})
      .pipe(map((res: any) => {
        localStorage.setItem('identity', JSON.stringify(res.user));
        localStorage.setItem('token', res.token);
        return res;
      }));
  }

  get_identity() {
    const identity = JSON.parse(localStorage.getItem('identity'));

    if (!!identity) {
        this.identity = identity;
    } else {
        this.identity = null;
    }

    return this.identity;
  }

  get_token() {
    const token = localStorage.getItem('token');

    if (!!token) {
        this.token = token;
    } else {
        this.token = null;
    }

    return this.token;
  }

  update_user(user_to_update) {
    const params = JSON.stringify(user_to_update);
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.get_token()}`
    });

    return this._http.put(this.url + 'update-user/' + user_to_update._id, params, {headers: headers})
      .pipe(map((res: any) => res));
  }

  get_admins() {
    return this._http.get(this.url + 'admins')
      .pipe(map((res: any) => res));
  }
}
