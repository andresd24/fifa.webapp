var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var ParksComponent = /** @class */ (function () {
    function ParksComponent() {
        this.passMeTheNewData = new EventEmitter();
        this.name = 'Horse\'s store';
        this.meters = 450;
        this.vegetation = 'High';
        this.open = true;
    }
    ParksComponent.prototype.emitEvent = function () {
        this.passMeTheNewData.emit({
            'name': this.name,
            'meters': this.meters,
            'vegetation': this.vegetation,
            'open': this.open
        });
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ParksComponent.prototype, "name", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ParksComponent.prototype, "passMeTheNewData", void 0);
    ParksComponent = __decorate([
        Component({
            selector: 'app-parks',
            templateUrl: './parks.component.html',
        }),
        __metadata("design:paramtypes", [])
    ], ParksComponent);
    return ParksComponent;
}());
export { ParksComponent };
//# sourceMappingURL=parks.component.js.map