import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: 'user-edit.component.html',
  providers: [UserService, UploadService]
})

export class UserEditComponent implements OnInit {
  public title: String;
  public user: User;
  public identity;
  public token;
  public status: String;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
      private _userService: UserService,
      private _uploadService: UploadService
  ) {
    this.title = 'My Profile';
    this.identity = this._userService.get_identity();
    this.token = this._userService.get_token();
    this.user = this.identity;
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.token = this._userService.get_token();
  }

  onSubmit() {
    delete this.user.password;
    console.log(this.user);
    this._userService.update_user(this.user)
      .subscribe(response => {
        if (!response.user) {
          this.status = 'error';
        } else {
          localStorage.setItem('identity', JSON.stringify(this.user.email));
          localStorage.setItem('token', JSON.stringify(this.token));
          this.status = 'success';

          const imageUrl = `${this.url}upload-image-user/${this.user._id}`;
          this._uploadService.make_file_request(imageUrl, [], this.filesToUpload, this.token, 'image')
            .then((result: any) => {
              this.user.image = result.image;
              localStorage.setItem('identity', JSON.stringify(this.user));
            }
          );
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
