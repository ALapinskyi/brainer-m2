import { Component } from '@angular/core';
import { PopoverController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-round-help-popover',
  templateUrl: 'round-help-popover.html'
})
export class RoundHelpPopoverPage {

  contentEle: any;

  constructor(private navParams: NavParams) {
  }

  ngOnInit() {
    if (this.navParams.data) {
      this.contentEle = this.navParams.data.contentEle;

    }
  }
  changeFontFamily(){
    
  }

  useHelp(help: string) {
    console.log(this.contentEle);
    this.contentEle.innerHTML = help;
  }
}
