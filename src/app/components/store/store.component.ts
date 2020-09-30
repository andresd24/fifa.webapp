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

  private isDislayButtonText = false;

  private isTimeOutEnabled = false;
  constructor() {
      this.titulo = 'Store';
  }

  ngOnInit() {
    $('#textojq').hide();


    $('#botonjq').click(function() {
        $('#textojq').slideToggle();
    });

    $('#textojqwdelay').hide();
    $('#botonjqwdelay').click(function() {
      setTimeout(() => {
        $('#textojqwdelay').slideToggle();
      }, 20000);
    });

  }

  onSubmit() {
    if (!this.isDislayButtonText) {
        this.isDislayButtonText = false;
    }
    setTimeout(() => {
        this.isDislayButtonText = true;
      }, 20000);

  }

  showNameAsync(args: string) {
    if (this.isTimeOutEnabled) {
      this.isTimeOutEnabled = false;
      setTimeout(() => {
        this.parkNameAsync = args;
        this.isTimeOutEnabled = true;
      }, 40000);
    }
  }

  verDatosParque(event) {
    console.log(event);
    this.myPark = event;
  }
}
