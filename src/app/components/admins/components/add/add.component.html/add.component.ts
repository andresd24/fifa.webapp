import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { GLOBAL } from '../../../services/global';
//import { Animal } from '../../../models/animal';
//import { AnimalService } from '../../../services/animal.service';
//import { UserService } from '../../../services/user.service';
//import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'admin-add',
//  templateUrl: './add.component.html',
//  providers: [AnimalService, UserService, UploadService]
})

export class AddComponent {
  public title: string;
 // public animal: Animal;
  public identity: any;
  public token: string;
  public url: string;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
 //   private _animalService: AnimalService,
 //   private _userService: UserService,
 //   private _uploadService: UploadService
  ) {
    this.title = 'New';
// this.animal = new Animal('', '', '', 2018, '', _userService.get_identity());
//    this.identity = this._userService.get_identity();
//    this.token = this._userService.get_token();
 //   this.url = GLOBAL.url;

  }
 /* 
  onSubmit() {

  this._animalService.add_animal(this.token, this.animal)
      .subscribe(response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          if (!this.filesToUpload) {
            this._router.navigate(['/admin-panel/list']);
          } else {
            const uploadUrl = `${this.url}upload-image-animal/${this.animal._id}`;
            this._uploadService.make_file_request(uploadUrl, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
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
*/
}
