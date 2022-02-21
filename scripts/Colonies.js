import { getColonies, setColonies, getSelectedGovernor, getGovernors } from "./database.js"
import { Governors } from "./Governors.js"

  //Change as needed

//Create event listener.
//event called "change"
//if change event takes place in governors menu, generate window alert show the choice.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governor") {
            setColonies(parseInt(event.target.value))  //Change as needed
        }
    }
)

// Everything below likely needs to be changed
export const Colony = () => {
    const colonies = getColonies()
    let selectedGovernorId = getSelectedGovernor()
    let governors = getGovernors()

    if (selectedGovernorId === undefined) {
        return "Select a governor"
    }

    let foundGovernor = governors.find(governor => {
        return governor.id === selectedGovernorId
    })

    let governorColony = foundGovernor.colonyId

    let foundColony = colonies.find(colony => {
        return colony.id === governorColony
    })

    let html = "<ul>"

    // This is how you have been converting objects to <li> elements
    
        html += `<li>
            < value="${foundColony.id}" /> ${foundColony.name}
        </li>`
    

    html += "</ul>"
    return html
}