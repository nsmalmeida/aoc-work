import { randomInt } from "./randomInt.js"
import { numQuestions } from "./utils/numQuestions.js"
// import { indexes } from "./utils/indexes.js"

export function randomIndex(theme, stack) {
    let index, stk
    if (stack == "topic-questions") stk = 0
    if (stack == "stop-questions") stk = 1
    const max = numQuestions[theme][stk]
    return randomInt(1, max)
}
