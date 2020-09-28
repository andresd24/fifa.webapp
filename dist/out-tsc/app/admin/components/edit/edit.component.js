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
import { Router, ActivatedRoute } from '@angular/router';
import { GLOBAL } from '../../../services/global';
import { Team } from '../../../models/team';
import { TeamService } from '../../../services/team.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';
var EditComponent = /** @class */ (function () {
    function EditComponent(_route, _router, _teamService, _userService, _uploadService) {
        this._route = _route;
        this._router = _router;
        this._teamService = _teamService;
        this._userService = _userService;
        this._uploadService = _uploadService;
        this.is_edit = true;
        this.title = 'Edit';
        this.team = new Team('', '', '', '', 2018, '', this._userService.get_identity());
        this.identity = this._userService.get_identity();
        this.token = this._userService.get_token();
        this.url = GLOBAL.url;
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getAnimal();
        if (this.team.name == null) {
        }
    };
    EditComponent.prototype.onSubmit = function () {
        var _this = this;
        var id = this.team._id;
        this._teamService.edit_team(this.token, id, this.team)
            .subscribe(function (response) {
            if (!response.animal) {
                _this.status = 'error';
            }
            else {
                _this.status = 'success';
                _this.team = response.team;
                if (!_this.filesToUpload) {
                    _this._router.navigate(['/admin-panel/list']);
                }
                else {
                    var url = _this.url + "upload-image-team/" + _this.team._id;
                    _this._uploadService.make_file_request(url, [], _this.filesToUpload, _this.token, 'image')
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
    EditComponent.prototype.fileChangeEvent = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
    };
    EditComponent.prototype.getAnimal = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = params['id'];
            _this._teamService.get_team(id).subscribe(function (response) {
                if (response.animal) {
                    _this.team = response.team;
                }
            }, function (error) {
                console.log(error);
            });
        });
    };
    EditComponent = __decorate([
        Component({
            selector: 'app-admin-edit',
            templateUrl: '../add/add.component.html',
            providers: [TeamService, UserService, UploadService]
        }),
        __metadata("design:paramtypes", [ActivatedRoute,
            Router,
            TeamService,
            UserService,
            UploadService])
    ], EditComponent);
    return EditComponent;
}());
export { EditComponent };
//# sourceMappingURL=edit.component.js.map