import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing-modules';
import { routing, appRoutingProviders} from './app.routing';

//import { ModuloemailModule } from './moduloemail/moduloemail.module';
import { AdminModule } from './admin/admin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
/*
import { AppComponent } from './app.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ParquesComponent } from './components/parques/parques.component';
import { AnimalsComponent } from './components/animals/animals.component';
import { ContactComponent } from './components/contact/contact.component';
import { KeepersComponent } from './components/keepers/keepers.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { AnimalDetailComponent } from './components/animal-detail/animal-detail.component';
import { ResetComponent } from './components/reset/reset.component';
*/
// Services
import { AdminGuard } from './services/admin.guard';
import { UserService } from './services/user.service';
import { ResetService } from './services/reset.service';

@NgModule({
  declarations: [
/*    AppComponent,
    TiendaComponent,
    ParquesComponent,
    AnimalsComponent,
    ContactComponent,
    KeepersComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    AnimalDetailComponent,
    ResetComponent*/
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
//  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
