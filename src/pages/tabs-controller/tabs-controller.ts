import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SinglePlayPage } from '../single-play/single-play';
import { ChampionshipPage } from '../championship/championship';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = SinglePlayPage;
  tab2Root: any = ChampionshipPage;
  constructor(public navCtrl: NavController) {
  }
  
}
