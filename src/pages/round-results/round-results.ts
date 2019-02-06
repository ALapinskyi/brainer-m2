import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Game } from '../../models/game/game';

import { RoundDetailsItemComponent } from '../../components/round-details-item/round-details-item';

@Component({
  selector: 'page-round-results',
  templateUrl: 'round-results.html'
})
export class RoundResultsPage {

  game: Game;
  test: RoundDetailsItemComponent;

  constructor(public navCtrl: NavController,
    public navParams: NavParams) {

      this.game = navParams.get('game');
  }
  
}
