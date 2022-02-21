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
    let html = "<select>"
    html += `<option value= "0" >Choose A Governor</option>`
    for (const governor of governors) {
        html += `<option value="${governor.id}">${governor.name}</option>`
    }
    html += "</select>"
    return html
}