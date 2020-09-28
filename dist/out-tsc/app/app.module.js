var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-modules';
import { routing, appRoutingProviders } from './app.routing';
// import { ModuloemailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { VenuesComponent } from './components/venues/venues.component';
import { ParksComponent } from './components/parks/parks.component';
import { TeamsComponent } from './components/teams/teams.component';
import { ContactComponent } from './components/contact/contact.component';
// import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { TeamDetailComponent } from './components/team-detail/team-detail.component';
import { ResetComponent } from './components/reset/reset.component';
// Services
import { AdminGuard } from './services/admin.guard';
import { UserService } from './services/user.service';
import { ResetService } from './services/reset.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                VenuesComponent,
                ParksComponent,
                TeamsComponent,
                ContactComponent,
                // KeepersComponent,
                HomeComponent,
                RegisterComponent,
                LoginComponent,
                UserEditComponent,
                TeamDetailComponent,
                ResetComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                FormsModule,
                //    ModuloemailModule,
                AdminModule,
                HttpClientModule,
                BrowserAnimationsModule,
                routing
            ],
            providers: [
                AdminGuard,
                UserService,
                ResetService,
                appRoutingProviders
            ],
            bootstrap: [AppComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map