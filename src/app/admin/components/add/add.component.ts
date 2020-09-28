import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-admin-add',
  templateUrl: '../add/add.component.html',
  providers: [TeamService, UserService, UploadService]
})

export class AddComponent {
  public title: string;
  public team: Team;
  public identity: any;
  public token: string;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _router: Router,
    private _teamService: TeamService,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.title = 'New';
    this.team = new Team('', '', '', '', 2018, '', _userService.get_identity());
    this.identity = this._userService.get_identity();
    this.token = this._userService.get_token();
    this.url = GLOBAL.url;

  }

  onSubmit() {

  this._teamService.add_team(this.token, this.team)
      .subscribe(response => {
        if (!response.team) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.team = response.team;

          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/list']);
          } else {
            const uploadUrl = `${this.url}upload-image-tesm/${this.team._id}`;
            this._uploadService.make_file_request(uploadUrl, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.team.image = result.image;
                this._router.navigate(['/admin-panel/list']);
              });
          }
        }
      },
      error => {
        const errorMessage = <any>error;

        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}
