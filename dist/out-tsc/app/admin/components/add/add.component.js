var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { UploadService } from 'src/app/services/upload.service';
var AddComponent = /** @class */ (function () {
    function AddComponent(_router, _teamService, _userService, _uploadService) {
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.title = 'New';
        this.team = new Team('', '', '', '', 2018, '', _userService.get_identity());
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = GLOBAL.url;
    }
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this._teamService.add_team(this.token, this.team)
            .subscribe(function (response) {
            if (!response.team) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.team = response.team;
                if (!_this.filesToUpload) {
                    _this._router.navigate(['/admin-panel/list']);
                }
                else {
                    var uploadUrl = _this.url + "upload-image-tesm/" + _this.team._id;
                    _this._uploadService.make_file_request(uploadUrl, [], _this.filesToUpload, _this.token, 'image')
                        .then(function (result) {
                        _this.team.image = result.image;
                        _this._router.navigate(['/admin-panel/list']);
                    });
                }
            }
        }, function (error) {
            var errorMessage = error;
            if (errorMessage != null) {
                _this.status = 'error';
            }
        });
    };
    AddComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    AddComponent = __decorate([
        Component({
            selector: 'app-admin-add',
            templateUrl: '../add/add.component.html',
            providers: [TeamService, UserService, UploadService]
        }),
        __metadata("design:paramtypes", [Router,
            TeamService,
            UserService,
            UploadService])
    ], AddComponent);
    return AddComponent;
}());
export { AddComponent };
//# sourceMappingURL=add.component.js.map