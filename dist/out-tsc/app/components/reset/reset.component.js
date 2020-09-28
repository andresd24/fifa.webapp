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
import { fadeIn } from '../animation';
import { ResetService } from 'src/app/services/reset.service';
var ResetComponent = /** @class */ (function () {
    function ResetComponent(resetService) {
        this.resetService = resetService;
    }
    ResetComponent.prototype.resetUser = function () {
        var _this = this;
        this.resetService.resetUser()
            .subscribe(function () {
            _this.status = 'success';
            _this.message = 'The user repo has been resetted';
        }, function (error) {
            _this.message = 'An error has ocurred trying to reset the user repo!';
        });
    };
    ResetComponent.prototype.resetTeams = function () {
        var _this = this;
        this.resetService.resetTeams()
            .subscribe(function () {
            _this.status = 'success';
            _this.message = 'The animal repo has been resetted';
        }, function (error) {
            _this.message = 'An error has ocurred trying to reset the animal repo!';
        });
    };
    ResetComponent = __decorate([
        Component({
            selector: 'app-reset',
            templateUrl: './reset.component.html',
            animations: [fadeIn]
        }),
        __metadata("design:paramtypes", [ResetService])
    ], ResetComponent);
    return ResetComponent;
}());
export { ResetComponent };
//# sourceMappingURL=reset.component.js.map