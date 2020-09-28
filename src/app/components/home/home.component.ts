import { Component } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  animations: [ fadeIn ]
})

export class HomeComponent  {
  title = 'Home';
}
