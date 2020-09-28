import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../../components/animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [ fadeIn ]
})

export class ContactComponent {
  title = 'Contact us';
}
