import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SelectRoundCategoryPage } from '../select-round-category/select-round-category';
import { RoundPage } from '../round/round';
import { RoundResultsPage } from '../round-results/round-results';

@Component({
  selector: 'page-new-game',
  templateUrl: 'new-game.html'
})
export class NewGamePage {

  constructor(public navCtrl: NavController) {
  }
  goToSelectRoundCategory(params){
    if (!params) params = {};
    this.navCtrl.push(SelectRoundCategoryPage);
  }goToRound(params){
    if (!params) params = {};
    this.navCtrl.push(RoundPage);
  }goToRoundResults(params){
    if (!params) params = {};
    this.navCtrl.push(RoundResultsPage);
  }
}
