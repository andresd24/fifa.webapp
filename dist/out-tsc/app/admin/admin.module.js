var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { SearchPipe } from './pipes/search.pipe';
import { HttpClientModule } from '@angular/common/http';
var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        NgModule({
            declarations: [
                MainComponent,
                ListComponent,
                AddComponent,
                EditComponent,
                SearchPipe
            ],
            imports: [
                CommonModule,
                FormsModule,
                HttpClientModule,
                AdminRoutingModule
            ],
            providers: []
        })
    ], AdminModule);
    return AdminModule;
}());
export { AdminModule };
//# sourceMappingURL=admin.module.js.map