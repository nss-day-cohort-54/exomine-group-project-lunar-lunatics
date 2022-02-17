import { } from "./database.js"

const colony = getColony()  //Change as needed

//Create event listener.
//event called "change"
//if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "") {
            setColonies(parseInt(event.target.value))  //Change as needed
        }
    }
)

// Everything below likely needs to be changed
export const Colony = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const colony of colonies) {
        html += `<li>
            <input value="${colony.id}" /> ${colony.colony}
        </li>`
    }

    html += "</ul>"
    return html
}