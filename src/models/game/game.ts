import { GameType } from '../type/gameType';
import { Round } from './round';
import { Player } from './player';

export class Game {
    id: string;
    players: Player[];
    type: GameType;
    
    startTime: Date;
    changeTime: Date;
    finishTime: Date;

    rounds: Round[];
    result: Map<string,number>;
    winner: string;
}