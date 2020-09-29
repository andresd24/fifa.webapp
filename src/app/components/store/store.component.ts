import {Component, OnInit } from '@angular/core';
import { fadeIn } from '../../components/animation';
import { timeout } from 'q';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styles: ['h1 {color: blue}'],
  animations: [ fadeIn ]
})

export class StoreComponent implements OnInit {
  public titulo: string;
  public nombreDelParque: string;
  public parkNameAsync: string;
  public myPark: string;

  private isTimeOutEnabled = false;
  constructor() {
      this.titulo = 'Store';
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
      }, 20000);
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

  verDatosParque(event) {
    console.log(event);
    this.myPark = event;
  }
}
