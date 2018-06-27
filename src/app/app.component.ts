import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MySettingsPage } from '../pages/my-settings/my-settings';
import { NewGamePage } from '../pages/new-game/new-game';
import { SelectRoundCategoryPage } from '../pages/select-round-category/select-round-category';
import { RoundPage } from '../pages/round/round';
import { RoundResultsPage } from '../pages/round-results/round-results';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { ProfilePage } from '../pages/profile/profile';


import { SinglePlayPage } from '../pages/single-play/single-play';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = SinglePlayPage;

  pages = [
    {
      title: "Games", link: SinglePlayPage, icon: "game-controller-b"
    },
    {
      title: "Friends", link: MyFriendsPage, icon: "contacts"
    },
    {
      title: "Statistics", link: null, icon: "stats"
    },
    {
      title: "Settings", link: MySettingsPage, icon: "settings"
    },
  ];

  activePage: any = this.pages[0];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  goToPage(page){
    this.navCtrl.setRoot(page.link);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }

  goToProfile() {
    this.navCtrl.setRoot(ProfilePage);
  }


}
