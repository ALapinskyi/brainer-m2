import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
import { Http, Headers,  } from '@angular/http';
import { RestProvider } from '../rest/rest';
import 'rxjs/add/operator/map';

//import { baseURL } from '../../models/constants';
import { TokenInfo } from '../../models/user';
import { Game } from '../../models/game/game';
import { Round } from '../../models/game/round';
import { GameListItem } from '../../models/simpleGameItem';

const gameListUrl = 'assets/data/gameList.json';
const game1Url = 'assets/data/game1.json';
const game2Url = 'assets/data/game2.json';

/*
  Generated class for the GameListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameProvider {

  token : TokenInfo;

  constructor(public http: Http, private restService : RestProvider) {
    //var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //this.token = currentUser && currentUser.token;
  }

  getGamesList(): Observable<GameListItem[]>{
    return this.http.get(gameListUrl).map(res =>
        { return this.restService.extractData(res); });
  }

  getGameById(gameId: string): Observable<Game>{
    console.log(gameId);
    if(gameId[0] === "625") {
      return this.http.get(game2Url).map(res =>
        { return this.restService.extractData(res); });
    } else {
      return this.http.get(game1Url).map(res =>
        { return this.restService.extractData(res); });
    }
    

  }
  /*
  getActiveGames(): Observable<ActiveGame[]>{
    let headers = new Headers(
      {
        'Authorization': 'Bearer '+ this.token
      });

    return this.http.get(baseURL + 'api/game/all', {headers: headers})
    .map(res => { return this.restService.extractData(res); })
    .catch(error => { return this.restService.handleError(error);})
  }
  
  getRequestedGames(): Observable<ActiveGame[]>{
    let headers = new Headers(
      {
        'Authorization': 'Bearer '+ this.token
      });

    return this.http.get(baseURL + 'api/game/all', {headers: headers})
    .map(res => { return this.restService.extractData(res); })
    .catch(error => { return this.restService.handleError(error);})
  }

  getGameById(gameId: string): Observable<ActiveGame>{
    let headers = new Headers(
      {
        'Authorization': 'Bearer '+ this.token
      });

    return this.http.get(baseURL + 'api/game?gameId=' + gameId, {headers: headers})
    .map(res => { return this.restService.extractData(res); })
    .catch(error => { return this.restService.handleError(error);})

  }
  
  requestNewGame(mode : string): Observable<ActiveGame>{
    let headers = new Headers(
      {
        'Authorization': 'Bearer '+ this.token
      });

    return this.http.get(baseURL + 'api/game/new?mode=' + mode, {headers: headers})
    .map(res => { return this.restService.extractData(res); })
    .catch(error => { return this.restService.handleError(error);})
  }
  
  persistRound(game : ActiveGame): void{
    let headers = new Headers(
      {
        'Authorization': 'Bearer '+ this.token
      });

    this.http.post(baseURL + 'api/game/persistRound', game, {headers: headers}).subscribe();
  }
*/
}