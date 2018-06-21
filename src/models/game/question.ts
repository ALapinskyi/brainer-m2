import { Answer } from './answer';
import { QuestionType } from '../type/questionType';
import { HintType } from '../type/hintType';
import { Player } from './player';
import { HintResult } from './hintResult';

export class Question {
    q_id: number;
    number: number;
    description: string;
    image: string;
    type: QuestionType;
    answers: Answer[];
    playerResult: Map<string, Answer | Map<number,Answer>>;
    usedHint: Map<string, HintResult>;
}