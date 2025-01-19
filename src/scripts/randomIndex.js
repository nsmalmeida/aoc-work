import { randomInt } from "./randomInt.js"
import { numQuestions } from "./utils/numQuestions.js"
// import { indexes } from "./utils/indexes.js"

// Retorna uma número aleatório entre 1 e quantidade de questões de um tipo e tema.
export function randomIndex(theme, stackType) {
    const max = numQuestions[theme][stackType]
    return randomInt(1, max)
}
