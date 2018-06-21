import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { RoundPage } from '../round/round';
import { RoundResultsPage } from '../round-results/round-results';

@Component({
  selector: 'page-select-round-category',
  templateUrl: 'select-round-category.html'
})
export class SelectRoundCategoryPage {

  categories: String[];

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController) {
      this.setCategories();
  }

  setCategories(){
    this.categories = ["Sport", "Music", "History"];
  }

  goToRound(event: any){
    this.navCtrl.push(RoundPage);
    //this.viewCtrl.dismiss();
  }
  
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
