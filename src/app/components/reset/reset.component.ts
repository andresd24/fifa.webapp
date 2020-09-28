import { Component } from '@angular/core';
import { fadeIn } from '../animation';
import { ResetService } from 'src/app/services/reset.service';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  animations: [ fadeIn ]
})

export class ResetComponent  {
  status: string;
  message: string;
  constructor(private resetService: ResetService) {

  }

  resetUser(): void {
    this.resetService.resetUser()
      .subscribe(() => {
        this.status = 'success';
        this.message = 'The user repo has been resetted';
        },
        error => {
          this.message = 'An error has ocurred trying to reset the user repo!';
        });
  }

  resetTeams(): void {
    this.resetService.resetTeams()
      .subscribe(() => {
        this.status = 'success';
        this.message = 'The animal repo has been resetted';
        },
        error => {
          this.message = 'An error has ocurred trying to reset the animal repo!';
        });
  }
}
