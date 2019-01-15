import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SinglePlayPage } from '../pages/single-play/single-play';
import { ChampionshipPage } from '../pages/championship/championship';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { MySettingsPage } from '../pages/my-settings/my-settings';
import { MyFriendsPage } from '../pages/my-friends/my-friends';
import { NewGamePage } from '../pages/new-game/new-game';
import { RoundPage } from '../pages/round/round';
import { SelectRoundCategoryPage } from '../pages/select-round-category/select-round-category';
import { RoundResultsPage } from '../pages/round-results/round-results';
import { ProfilePage } from '../pages/profile/profile';
import { StatisticsPage } from '../pages/statistics/statistics';
import { RoundHelpPopoverPage } from '../pages/round-help-popover/round-help-popover';
import { LoginPage } from '../pages/login/login';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GameProvider } from '../providers/game/game';
import { RestProvider } from '../providers/rest/rest';
import { HttpModule } from '@angular/http';
import { CountdownModule } from 'ngx-countdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IonicSwipeAllModule } from 'ionic-swipe-all';

@NgModule({
  declarations: [
    MyApp,
    SinglePlayPage,
    ChampionshipPage,
    TabsControllerPage,
    MySettingsPage,
    MyFriendsPage,
    NewGamePage,
    RoundPage,
    SelectRoundCategoryPage,
    RoundResultsPage,
    ProfilePage,
    StatisticsPage,
    RoundHelpPopoverPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CountdownModule,
    BrowserAnimationsModule,
    IonicSwipeAllModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SinglePlayPage,
    ChampionshipPage,
    TabsControllerPage,
    MySettingsPage,
    MyFriendsPage,
    NewGamePage,
    RoundPage,
    SelectRoundCategoryPage,
    RoundResultsPage,
    ProfilePage,
    StatisticsPage,
    RoundHelpPopoverPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GameProvider,
    RestProvider
  ]
})
export class AppModule {}