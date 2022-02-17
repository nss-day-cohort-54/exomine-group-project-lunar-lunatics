import { } from "./database.js"

const govs = getgovs()  // Change as needed

// Create event listener.
// event called "change"
// if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "") {
            setGovs(parseInt(event.target.value))  //Change as needed
        }
    }
)


// Needs Drop Down button
// Change as needed
export const Govs = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const gov of govs) {
        html += `<li>
            <input type="drop-down?" name="" value="${gov.id}" /> ${gov.gov}
        </li>`
    }

    html += "</ul>"
    return html
}