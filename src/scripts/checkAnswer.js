import { answers } from "./utils/answers.js";

export function checkAnswer(theme, index) {
    console.log(answers[theme][index])
    return answers[theme][index]
}