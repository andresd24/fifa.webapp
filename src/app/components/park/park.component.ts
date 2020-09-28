import {Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';
import { timeout } from 'q';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-park',
  templateUrl: './park.component.html',
  styles: ['h1 {color: blue}'],
  animations: [ fadeIn ]
})

export class ParkComponent implements OnInit {
  public title: string;
  public parkName: string;
  public parkNameAsync: string;
  public myPark: string;

  private isTimeOutEnabled = false;
  constructor() {
      this.title = 'Park';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#textojqwdelay').hide();

    $('#botonjq').click(function() {
        $('#textojq').slideToggle();
    });

    $('#botonjqwdelay').click(function() {
      setTimeout(() => {
        $('#textojqwdelay').slideToggle();
      }, 40000);
    });

  }

  showNameAsync(args: string) {
    if (!this.isTimeOutEnabled) {
      this.isTimeOutEnabled = true;
      setTimeout(() => {
        this.parkNameAsync = args;
        this.isTimeOutEnabled = false;
      }, 40000);
    }
  }

  showParkData(event) {
    console.log(event);
    this.myPark = event;
  }
}
