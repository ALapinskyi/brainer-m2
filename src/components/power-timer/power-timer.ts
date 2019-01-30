import { Component, ViewChild, Input } from '@angular/core';

import { CountdownComponent, Config } from 'ngx-countdown';
/**
 * Generated class for the PowerTimerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'power-timer',
  templateUrl: 'power-timer.html'
})
export class PowerTimerComponent {

  @ViewChild(CountdownComponent) 
  powerTimer: CountdownComponent;

  maxPower: number = 5;
  defaultTimeout: number = 10;

  powerValue: number;
  powerTimeout: number;

  repainted: boolean = true;

  constructor() {
      this.powerValue = this.maxPower;
      this.powerTimeout = this.defaultTimeout;
  }
  
  counter(i: number) {
    return new Array(i);
  }

  onTimerFinished() {
    if(this.powerValue < this.maxPower) {
      this.powerValue++;
      //hack to restart timer
      this.powerTimeout = this.defaultTimeout + this.powerValue*0.001;
      this.powerTimer.restart();
    }
  }

  @Input() set power(val: number) {
    this.powerValue = val;
  }

  @Input() set time(val: number) {
    this.powerTimeout = val;
  }

}
