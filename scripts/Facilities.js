import { getFacilities, setFacility, getFacilityMinerals } from "./database.js"

const facilities = getFacilities()  // Change as needed

// Create event listener.
// event called "change"
// if change event takes place in governors menu, generate window alert show the choice.

//Event listener needs to corelate facility data with facilityMinerals data.
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "facility") {
            setFacility(parseInt(event.target.value))  
        }
    }
)

// Needs Drop down button code.
// Change as needed
export const Facilities = () => {
    let html = "<select>"
    html += `<option value= "0" >Choose A Facility</option>`
    for (const facility of facilities) {
        html += `<option value="${facility.id}">${facility.name}</option>`
    }
    html += "</select>"
    return html
}

