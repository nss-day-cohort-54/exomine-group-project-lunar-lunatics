import { getGovernors, setGovernors } from "./database.js"

const governors = getGovernors()  // Change as needed

// Create event listener.
// event called "change"
// if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setGovernors(parseInt(event.target.value))  //Change as needed
        }
    }
)


// Needs Drop Down button
// Change as needed
export const Governors = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const governor of governors) {
        html += `<li>
            <input type="drop-down?" name="" value="${governor.id}" /> ${governor.governor}
        </li>`
    }

    html += "</ul>"
    return html
}