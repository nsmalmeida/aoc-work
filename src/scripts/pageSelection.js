import { formatKebabCase } from "./formatKebabCase.js"

export function pageSelection() {
    const options = document.querySelectorAll(".option")
    options.forEach((option, index) => {
        option.addEventListener("click", () => {
            if (option.classList.contains("manual")) {
                console.log("manual")
                return
            }
            if (
                option.classList.contains("stop-questions") ||
                option.classList.contains("topic-questions")
            ) {
                localStorage.setItem("data", JSON.stringify(option.classList))
                const path = `./Question.html`
                window.location.href = path
                return path
            }
            const path = `./src/pages/${formatKebabCase(
                option.classList[option.classList.length - 1]
            )}.html`
            window.location.href = path
            return path
        })
    })
}
