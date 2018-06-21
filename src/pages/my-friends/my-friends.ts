import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-my-friends',
  templateUrl: 'my-friends.html'
})
export class MyFriendsPage {

  filterType = "all";
  isSearchMode = false;
  friends: Array<any>;
  searchResults: Array<any>;

  constructor(public navCtrl: NavController) {
    this.setFriends();
  }

  setFriends() {
    this.friends = [
      {
        username: 'Anthony J',
        type: 'app'
      },
      {
        username: 'Angry Birds',
        type: 'facebook'
      },
      {
        username: 'Oleg A',
        type: 'all'
      },
      {
        username: 'John Johnson',
        type: 'all'
      },
      {
        username: 'And Arrrreea',
        type: 'facebook'
      }
    ];;
  }


  findUsers(event: any) {
    let val = event.target.value;

    if (val && val.trim() !== '') {
      this.isSearchMode = true;
      this.searchResults = this.friends.filter(function(item) {
        return item.username.toLowerCase().includes(val.toLowerCase());
      });
    } else {
      this.isSearchMode = false;
      this.onClear(event);
    }
  }

  getFriendsList(type: string){
    if (type === "all") {
      return this.friends;
    } if(type === "requests") {
      //TODO
      return this.friends;
    } else {
      return this.friends.filter(function(item) {
        return item.type.toLowerCase().includes(type);
      });
    }
  }

  onClear(event: any) {
    this.isSearchMode = false;
    this.searchResults = [];
    this.setFriends();
  }

  setSearchMode(isSearchMode: boolean) {
    this.isSearchMode = isSearchMode;
  }

}
