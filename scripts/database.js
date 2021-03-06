// Create arrays: Minerals, Facilities, Colonies, Governors, Colony Minerals, Facility Minerals, Orders.
// transientState array will be "Orders"
// Colony Inventory will be an empty array.
// Mineral Inventory array will be FKs, with place holder values.  Values will be replaced by a defined function created in an exported orders function.
// Create values for Govs and minerals.
// Create Colony Names
// Facility names will be associated with colony names.
// Create exports for array contents via .map.
// Create export setFunctions. Will utilize transient state data from "Orders". associated with minerals,facilities, Govs. 




// Will need a colony minerals and facility minerals table.
// Quantities will change for facilityMinerals, and colonyMinerals.
const database = {
        minerals: [
                {id: 1, name: "spice"},
                {id: 2, name: "fear"},
                {id: 3, name: "pain"},
                {id: 4, name: "rage"}
        ],
        facilities: [
                {id: 1, name: "Atreides"},
                {id: 2, name: "Harkonnen"},
                {id: 3, name: "Bene Gesserit"},
                {id: 4, name: "Freman"}
        ],
        colonies: [
                {id: 1, name: "Arrakis"},
                {id: 2, name: "Caladan"},
                {id: 3, name: "Giedi Prime"}
        ],
        governors: [
                {id: 1, name: "Leto Atreides", colonyId: 1},
                {id: 2, name: "Barron Harkonnen", colonyId: 3},
                {id: 3, name: "Glossu Beast Rabban", colonyId: 2}
        ],
        facilityMinerals: [
                {id: 1, mineralId: 1, facilityId: 2, quantity: 16},
                {id: 2, mineralId: 2, facilityId: 3, quantity: 11},
                {id: 3, mineralId: 3, facilityId: 1, quantity: 18},
                {id: 4, mineralId: 4, facilityId: 4, quantity: 13}

        ],
        colonyMinerals: [],        
        transientState : {}

}



// Preexisting boilerplate code.  Needs further explanation.

export const setMinerals = (mineralId) => {
        database.transientState.selectedMineral = mineralId
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setColonies = (colonyId) => {
        database.transientState.selectedColony = colonyId
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setFacility = (facilityId) => {
        database.transientState.selectedFacility = facilityId
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const setGovernors = (governorId) => {
        database.transientState.selectedGovernor = governorId
        document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getMinerals = () => {
        return database.minerals.map(mineral => ({...mineral}))
}

export const getFacilities = () => {
        return database.facilities.map(facility => ({...facility}))
}

export const getColonies = () => {
        return database.colonies.map(colony => ({...colony}))
}

export const getGovernors = () => {
        return database.governors.map(governor => ({...governor}))
}

export const getSelectedGovernor = () => {
        return database.transientState.selectedGovernor
}

export const getFacilityMinerals = () => {
        return database.facilityMinerals.map(facilityMineral => ({...facilityMineral}))
}

export const getColonyMinerals = () => {
        return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}


// Create Event to Dispatch: "transientState"
        // Copy the current state of user choices
                //Use spread operator "..." to copy individual values in relevant array
        // Add a new primary key to the object
        // Add the new order object to custom orders state
                //Uses .push.
        // Reset the temporary state for user choices
                // Uses data from transient state array "database.Orders"
        // Broadcast a notification that permanent state has changed 
                //"document.dispatchEvent(new CustomEvent("stateChanged"))"

export const purchaseMineral = () => {
        // Copy the current state of user choices.
        const newPurchase = {...database.transientState}

        // Add new primary key to the selected objects.
        //const lastIndex = database.transientState.???????
        //newPurchase.id = database.colonyMinerals[lastIndex].id????

        // Add the new purchase object to transient state.
        database.transientState.push(newPurchase)

        //Reset transient state for purchase choices
        database.transientState = {}


        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
}


