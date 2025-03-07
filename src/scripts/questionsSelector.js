import { formatKebabCase } from "./formatKebabCase.js"
import { randomIndex } from "./randomIndex.js"
import { checkAnswer } from "./checkAnswer.js"
import { questions } from "./utils/questions.js"

function questionsSelection() {
    window.onload = () => {
        const data = JSON.parse(localStorage.getItem("data"))
        const [format, theme, stack] = Object.values(data)
        let stackType = null
        if (stack == "topic-questions") stackType = 0
        if (stack == "stop-questions") stackType = 1
        const index = randomIndex(theme, stackType)
        console.log("index", index)
        const imagePath = `../assets/images/${formatKebabCase(
            theme
        )}/${formatKebabCase(stack)}/${index}-${
            questions[theme][stackType][index - 1]
        }.jpg`
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
        }
        const divs = divAlternatives.querySelectorAll(".option")
        console.log(divs)
        function handleClick(event) {
            const answer = checkAnswer(theme, questions[theme][stackType][index - 1])
            const divAnswer = document.createElement("div")
            const h1 = document.createElement("h1")
            console.log("clicou")
            divAnswer.classList.add("option")
            if (answer == event.target.innerText.toLowerCase()) {
                h1.innerText = "Acertou! Permaneça na casa"
                divAnswer.classList.add("right-answer")
            } else {
                h1.innerText = "Errou! Retorne para a casa que estava"
                divAnswer.classList.add("wrong-answer")
            }
            divAnswer.appendChild(h1)
            divContainer.appendChild(divAnswer)
            divAnswer.scrollIntoView({
                behavior: "smooth",
                block: "end",
            })
            divs.forEach((div) => {
                div.removeEventListener("click", handleClick)
            })
        }
        divs.forEach((div) => {
            div.addEventListener("click", handleClick, { once: true })
        })
        img.src = imagePath
        divImage.appendChild(img)
        divImage.appendChild(divAlternatives)
    }
}

questionsSelection()
