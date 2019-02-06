import { Player } from "./game/player";

export class GameListItem {
    id: string
    roundNumber: number;
    waitingFor: string;
    waitingTime: number;
    score: string;
    secondPlayer: Player;
}