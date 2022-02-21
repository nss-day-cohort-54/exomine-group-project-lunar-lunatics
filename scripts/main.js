import { ExoMine } from "./ExoMine.js"
import { Facilities } from "./Facilities.js"

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