import { Category } from './category';
import { Question } from './question';
import { RoundType } from '../type/roundType';
import { Player } from './player';

export class Round {
    number: number;
    roundType: RoundType;
    category: Category;
    questions: Question[];
    score: Map<number, String[]>;

    /*constructor(number?: number){
        this.number = number;
    }*/
}