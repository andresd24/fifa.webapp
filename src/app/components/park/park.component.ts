import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
})

export class ParkComponent {
  @Input() name: string;
  public meters: number;
  public vegetation: string;
  public open: boolean;

  @Output() passMeTheNewData = new EventEmitter();

  constructor() {
    this.name = 'Horse\'s store';
    this.meters = 450;
    this.vegetation = 'High';
    this.open = true;
  }

  emitEvent() {
    this.passMeTheNewData.emit({
      'name': this.name,
      'meters': this.meters,
      'vegetation': this.vegetation,
      'open': this.open
    });
  }
}
