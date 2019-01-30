import { NgModule } from '@angular/core';
import { PowerTimerComponent } from './power-timer/power-timer';
import { GameRoundItemComponent } from './game-round-item/game-round-item';
@NgModule({
	declarations: [PowerTimerComponent,
    GameRoundItemComponent],
	imports: [],
	exports: [PowerTimerComponent,
    GameRoundItemComponent]
})
export class ComponentsModule {}
