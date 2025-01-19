import { answers } from "./utils/answers.js";

export function checkAnswer(theme, index) {
    return answers[theme][index-1]
}