import { getMinerals, setMinerals } from "./database.js"

const minerals = getMinerals()  //Change as needed

//Create event listener.
//event called "change"
//if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "") {
            setMinerals(parseInt(event.target.value))  //Change as needed
        }
    }
)

//Change as needed
export const Minerals = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const mineral of minerals) {
        html += `<li>
            <input type="radio" name="" value="${mineral.id}" /> ${mineral.name}
        </li>`
    }

    html += "</ul>"
    return html
}