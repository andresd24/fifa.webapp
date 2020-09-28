import { Component, OnInit } from '@angular/core';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'admin-list',
  templateUrl: './list.component.html',
  providers: [TeamService, UserService, UploadService]
})

export class ListComponent implements OnInit {
  title = 'Team\'s List';
  public teams: Team[];
  public token: string;
  public searchTerm: string;

  constructor(
    private _teamService: TeamService,
    private _userService: UserService
  ) {
    this.title = 'Team\'s List';
  }

  ngOnInit() {
    this.token = this._userService.get_token();
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

  deleteTeam(id: string) {
    $('#myModal-' + id).modal('hide');
    this._teamService.delete_team(this.token, id)
      .subscribe(response => {
        if (!response.team) {
          alert('Server error');
        }
        this.getTeams();
      },
      error => {
        alert('Server error');
      }
    );
  }
}
