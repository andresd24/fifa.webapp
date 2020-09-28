import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../services/team.service';
import { Team } from '../../models/team';
import { GLOBAL } from '../../services/global';
import { fadeIn } from '../../components/animation';


@Component({
  selector: 'teams',
  templateUrl: './teams.component.html',
  providers: [TeamService],
  animations: [fadeIn]
})

export class TeamsComponent implements OnInit {
  title = 'Teams';
  public teams: Team[];
  public url: string;

  constructor(
    private _teamService: TeamService
  ) {
    this.title = 'Teams';
    this.url = GLOBAL.url;
  }
  ngOnInit() {
    this.getTeams();
  }

  getTeams() {
    this._teamService.get_teams().subscribe(
      response => {
        if (response.teams) {
          this.teams = response.teams;
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }
}
