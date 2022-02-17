import { getFacilities } from "./database.js"

const facilities = getFacilities()  // Change as needed

// Create event listener.
// event called "change"
// if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "") {
            setFacilities(parseInt(event.target.value))  //Change as needed
        }
    }
)

// Needs Drop down code.
// Change as needed
export const Facilities = () => {
    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    for (const facility of facilities) {
        html += `<li>
            <input type="drop-down?" name="" value="${fac.id}" /> ${fac.fac}
        </li>`
    }

    html += "</ul>"
    return html
}