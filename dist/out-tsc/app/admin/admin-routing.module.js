var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { EditComponent } from './components/edit/edit.component';
import { AdminGuard } from '../services/admin.guard';
var adminRoutes = [
    {
        path: 'admin-panel',
        component: MainComponent,
        canActivate: [AdminGuard],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: ListComponent },
            { path: 'create', component: AddComponent },
            { path: 'edit', component: EditComponent },
            { path: 'edit/:id', component: EditComponent }
        ]
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        NgModule({
            imports: [
                RouterModule.forChild(adminRoutes)
            ],
            exports: [
                RouterModule
            ]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map