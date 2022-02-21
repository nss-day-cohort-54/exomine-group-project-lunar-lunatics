import { ExoMine } from "./ExoMine.js"
import { Facilities } from "./Facilities.js"
import { Minerals } from "./Minerals.js"

const mainContainer = document.querySelector("#container")
const facilityContainer = document.querySelector(".facility_container")
const renderFacility = () => {
    facilityContainer.innerHTML = Facilities()
}

renderFacility()

const renderAllHTML = () => {
    mainContainer.innerHTML = ExoMine()
}

renderAllHTML()

document.addEventListener("stateChanged", 
(event) => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})


const mineral = Minerals()
document.addEventListener("stateChanged", 
(event) => {

    let html = "<ul>"
    for (min of mineral)

    html += `<li>
    <input type="radio" name="" value="${min.id}" /> ${min.name}
</li>`
    
    html += "</ul>"

    return html
        
})

