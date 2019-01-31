import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameListItem } from '../../models/simpleGameItem';

/**
 * Generated class for the GameRoundItemComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'game-round-item',
  templateUrl: 'game-round-item.html'
})
export class GameRoundItemComponent {

  private itemValue: GameListItem;

  constructor() {
  }

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Input() set item(val: GameListItem) {
    this.itemValue = val;
  }

  onCardClick(clickedEntry: GameListItem): void {
      this.onClick.emit([clickedEntry.id]);
  }

}
