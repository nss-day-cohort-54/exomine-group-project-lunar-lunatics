import { getFacilities, setFacility } from "./database.js"

const facilities = getFacilities()  // Change as needed

// Create event listener.
// event called "change"
// if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))  //Change as needed
        }
    }
)

// Needs Drop down code.
// Change as needed
export const Facilities = () => {
    let html = "<ul>"

    for (const facility of facilities) {
        html += `<li>
            <input type="drop-down?" name="" value="${facility.id}" /> ${facility.facility}
        </li>`
    }

    html += "</ul>"
    return html
}