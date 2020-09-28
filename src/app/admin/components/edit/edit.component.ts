import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';



@Component({
    selector: 'admin-edit',
    templateUrl: '../add/add.component.html',
    providers: [TeamService, UserService, UploadService]
})

export class EditComponent implements OnInit {
  public title: string;
  public team: Team;
  public identity: any;
  public token: string;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _teamService: TeamService,
    private _userService: UserService,
    private _uploadService: UploadService
  ) {
    this.is_edit = true;
    this.title = 'Edit';
    this.team = new Team('', '', '', '', 2018, '', this._userService.get_identity());
    this.identity = this._userService.get_identity();
    this.token = this._userService.get_token();
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.getAnimal();

    if (this.team.name == null) {

    }
  }

  onSubmit() {
    const id = this.team._id;
    this._teamService.edit_team(this.token, id, this.team)
      .subscribe(response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.team = response.team;

          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/list']);
          } else {
            const url = `${this.url}upload-image-team/${this.team._id}`;
            this._uploadService.make_file_request(url, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.team.image = result.image;
                this._router.navigate(['/admin-panel/list']);
              }
              );
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

  getAnimal() {
    this._route.params.forEach((params: Params) => {
      const id = params['id'];

      this._teamService.get_team(id).subscribe(
        response => {
          if (response.animal) {
            this.team = response.team;
          }
        },
        error => {
          console.log(<any>error);
        }
      );
    });
  }
}
