import { formatKebabCase } from "./formatKebabCase.js"
import { randomIndex } from "./randomIndex.js"
import { checkAnswer } from "./checkAnswer.js"

function questionsSelection() {
    window.onload = () => {
        const data = JSON.parse(localStorage.getItem("data"))
        const [format, theme, stack] = Object.values(data)
        const index = randomIndex(theme, stack)
        console.log("index", index)
        const imagePath = `./src/assets/images/${formatKebabCase(
            theme
        )}/${formatKebabCase(stack)}/${index}.png`
        console.log(imagePath)
        const divImage = document.querySelector(".question-image")
        const divContainer = document.querySelector(".container")
        const divAlternatives = document.createElement("div")
        const img = document.createElement("img")
        const h1 = document.createElement("h1")
        const alternatives = ["A", "B", "C", "D"]
        divAlternatives.classList.add("options-fluid-row")
        for (let i = 0; i < 4; i++) {
            const div = document.createElement("div")
            const h1 = document.createElement("h1")
            h1.innerText = alternatives[i]
            div.classList.add("option")
            div.classList.add("alternative-theme")
            div.appendChild(h1)
            divAlternatives.appendChild(div)
            div.addEventListener("click", () => {
                const answer = checkAnswer(theme, index)
                const divAnswer = document.createElement("div")
                const h1 = document.createElement("h1")
                divAnswer.classList.add("option")
                if (answer == alternatives[i].toLowerCase()) {
                    h1.innerText = "Acertou! Permaneça na casa"
                    divAnswer.classList.add("right-answer")
                } else {
                    h1.innerText = "Errou! Retorne para a casa que estava"
                    divAnswer.classList.add("wrong-answer")
                }
                divAnswer.appendChild(h1)
                divContainer.appendChild(divAnswer)
            })
        }
        img.src = imagePath
        divImage.appendChild(img)
        divImage.appendChild(divAlternatives)
    }
}

questionsSelection()
