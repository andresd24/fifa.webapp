var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { GLOBAL } from './global';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from './user.service';
var ResetService = /** @class */ (function () {
    function ResetService(_http, userService) {
        this._http = _http;
        this.userService = userService;
    }
    ResetService.prototype.resetUser = function () {
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.userService.get_token()
        });
        var url = GLOBAL.url + "resetuser";
        return this._http
            .post(url, null, { headers: headers })
            .pipe(map(function (res) { return res; }));
    };
    ResetService.prototype.resetTeams = function () {
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + this.userService.get_token()
        });
        var url = GLOBAL.url + "resetteams";
        return this._http
            .post(url, null, { headers: headers })
            .pipe(map(function (res) { return res; }));
    };
    ResetService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient,
            UserService])
    ], ResetService);
    return ResetService;
}());
export { ResetService };
//# sourceMappingURL=reset.service.js.map