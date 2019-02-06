import { Component, Input } from '@angular/core';
import { Round } from '../../models/game/round';

/**
 * Generated class for the RoundDetailsItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'round-details-item',
  templateUrl: 'round-details-item.html'
})
export class RoundDetailsItemComponent {

  roundItem: Round;

  constructor() {
  }


  @Input() set round(val: Round) {
    console.log(val);
    this.roundItem = val;
  }


}
