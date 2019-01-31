import { Component, ViewChild } from '@angular/core';
import { NavController, ModalController, LoadingController } from 'ionic-angular';
import { NewGamePage } from '../new-game/new-game';
import { SelectRoundCategoryPage } from '../select-round-category/select-round-category';
import { GameProvider } from '../../providers/game/game';
import { Game } from '../../models/game/game';
import { User } from '../../models/user';
import { GameListItem } from '../../models/simpleGameItem';
import { Round } from '../../models/game/round';
import { RoundPage } from '../round/round';

import { PowerTimerComponent } from '../../components/power-timer/power-timer';
import { GameRoundItemComponent } from '../../components/game-round-item/game-round-item';

import { CountdownComponent, Config } from 'ngx-countdown';
import { trigger,style,transition,animate,state } from '@angular/animations';

@Component({
  selector: 'page-single-play',
  templateUrl: 'single-play.html',
  animations: [
    trigger('expandGameCard', [
      state('true',   style({
        opacity: '1',
        height: '100%'
      })),
      state('false',   style({
        opacity: '0',
        height: '0%'
      })),
      transition('* <=> true', animate('500ms ease-in')),
      transition('true <=> false', animate('500ms ease-in'))
    ])
  ]
})
export class SinglePlayPage {

  currentUser: User;

  actualGames: GameListItem[];
  errorMessage: string;

  selectedGame: Game;

  coins: number;

  constructor(private gameProvider: GameProvider, 
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public navCtrl: NavController) {
      this.setCurrentUser();
      this.setActualGames();

      this.coins = 12;
  }
  

  private setActualGames(){
    this.gameProvider.getGamesList().subscribe(
      res => this.actualGames = res, 
      errorMessage => this.errorMessage = errorMessage);
  }

  private setCurrentUser() {
    this.currentUser = {
      username: "thisGamer",
      firstName: "Boss",
      lastName: "Gamer",
      password: "qwerty",
      isActive: true
    }
  }

  private setSelectedGame(game: Game){
    this.selectedGame = game;

    let currentRound: Round;
    if(game.rounds) {
      for(var round of game.rounds) {
        if(round.score && round.score.get(this.currentUser.username)) {
          continue;
        } else {
          currentRound = round;
          break;
        }
      }
    }
    if(currentRound !== undefined) {
      this.goToRound(currentRound);
    }
  }

  goToNewGame(params){
    if (!params) params = {};
    this.navCtrl.push(NewGamePage);
  }

  selectGame(gameId: string){

    let loading = this.loadingCtrl.create({
      content: 'Please wait...',
      spinner: 'dots'
    });
    loading.present();
    

    this.gameProvider.getGameById(gameId)
    .subscribe(res => {
      setTimeout(() => {
        loading.dismiss();
        this.setSelectedGame(res);
      }, 500)
      ;
    }, errorMessage => this.errorMessage = errorMessage);
  }
  
  goToSelectRoundCategory(event: any){
    let modal = this.modalCtrl.create(SelectRoundCategoryPage);
    modal.present();
  }
  
  goToRound(round: Round){


    this.navCtrl.push(RoundPage, {
      round: round
    });
  }

  expandCard(game: GameListItem) {
    game.expandedCard = true;
  }

  hideExpandedCard(game: GameListItem) {
    game.expandedCard = false;
  }
  
  goToRoundInfo(event: any){
    console.log(event);
  }


}
