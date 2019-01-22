import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

import { SinglePlayPage } from '../single-play/single-play';

import { Platform } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, 
    private platform: Platform,
    private navParams: NavParams, 
    private googlePlus: GooglePlus,
    private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

    if(!this.platform.is('cordova')) {
      console.log('Logged in without cordova');
      this.navCtrl.push(SinglePlayPage);
    }
  }

  loginGoogle() {
    this.googlePlus.trySilentLogin({})
    .then(res => {
      console.log(res);
      this.navCtrl.push(SinglePlayPage);
    })
    .catch(err => console.error(err));
  }

  loginFacebook() {
    this.fb.getLoginStatus()
    .then((res: any) => {
      if(res.status === 'connected') {
        this.navCtrl.push(SinglePlayPage);
      } else {
        this.fb.login(['public_profile', 'user_friends', 'email'])
        .then((res: FacebookLoginResponse) => {
            console.log('Logged into Facebook!', res);
            this.navCtrl.push(SinglePlayPage);
          })
        .catch(e => console.log('Error logging into Facebook', e));
      }
    }).catch(e => console.log('Error logging into Facebook', e));
  }

}
