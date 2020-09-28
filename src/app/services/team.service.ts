import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Team } from '../models/team';

@Injectable()
export class TeamService {
  public url: String;

  constructor(private _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  add_team(token: string, team: Team) {
    team._id = '0';
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    return this._http.post(this.url + 'team', team, {headers: headers})
        .pipe(map((res: any) => res));
  }

  get_teams() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = {headers: headers};

    return this._http.get(this.url + 'teams', options)
      .pipe(map((res: any) => res));
  }

  get_team(id: string) {
    return this._http.get(this.url + 'team/' + id)
      .pipe(map((res: any) => res));
  }

  edit_team(token: string, id: string, team: Team) {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    return this._http.put(this.url + 'tesm/' + id, team, {headers: headers})
      .pipe(map((res: any) => res));
  }

  delete_team(token: string, id: string) {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    });

    const options = {headers: headers};

    return this._http.delete(this.url + 'team/' + id, options)
      .pipe(map((res: any) => res));
  }
}
