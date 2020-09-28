import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Credentials } from 'src/app/models/credentials';
import { UserService } from '../../services/user.service';
import { fadeIn } from '../../components/animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService],
  animations: [fadeIn]
})

export class LoginComponent {
  public title: String;
  public user: Credentials;
  public identity: any;
  public token: string;
  public status: String;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Sign In';
    this.user = new Credentials();
  }

  onSubmit() {
    this._userService.signin(this.user)
      .subscribe(response => {
        this.identity = response.user;
        this.token = response.token;

        this.status = 'success';

        this._router.navigate(['/']);
        },
        error => {
          const error_message = <any>error;
          if (error_message != null) {
            this.status = 'error';
          }
        });
  }
}
