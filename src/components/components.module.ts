import { NgModule } from '@angular/core';
import { PowerTimerComponent } from './power-timer/power-timer';
import { GameRoundItemComponent } from './game-round-item/game-round-item';
import { RoundDetailsItemComponent } from './round-details-item/round-details-item';
@NgModule({
	declarations: [PowerTimerComponent,
    GameRoundItemComponent,
    RoundDetailsItemComponent],
	imports: [],
	exports: [PowerTimerComponent,
    GameRoundItemComponent,
    RoundDetailsItemComponent]
})
export class ComponentsModule {}
