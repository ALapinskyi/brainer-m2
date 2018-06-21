import { Answer } from "./answer";
import { HintType } from "../type/hintType";

export class HintResult {
    usedHint: HintType;
    result: Answer | Map<Answer,number>;
}