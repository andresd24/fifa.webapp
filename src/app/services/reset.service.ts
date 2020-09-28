import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';

@Injectable()
export class ResetService {

  constructor(
    private _http: HttpClient,
    private userService: UserService) {
  }

  resetUser() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.get_token()}`
    });
    const url = `${GLOBAL.url}resetuser`;

    return this._http
      .post(url, null, { headers: headers })
      .pipe(map((res: any) => res));
  }

  resetAnimal() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.userService.get_token()}`
    });
    const url = `${GLOBAL.url}resetanimal`;

    return this._http
      .post(url, null, { headers: headers })
      .pipe(map((res: any) => res));
  }
}
