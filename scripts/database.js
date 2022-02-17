// Create arrays: Minerals, Facilities, Colonies, Governors, Colony Inventory, Orders.
// transientState array will be "Orders"
// Colony Inventory will be an empty array.
// Mineral Inventory array will be FKs, with place holder values.  Values will be replaced by a defined function created in an exported orders function.
// Create values for Govs and minerals.
// Create Colony Names
// Facility names will be associated with colony names.
// Create exports for array contents via .map.
// Create export setFunctions. Will utilize transient state data from "Orders". associated with minerals,facilities, Govs. 

// Create Dispatch Event: "purchaseMineral"
        // Copy the current state of user choices
                //Use spread operator "..." to copy individual values in relevant array
        // Add a new primary key to the object
        // Add the new order object to custom orders state
                //Uses .push.
        // Reset the temporary state for user choices
                // Uses data from transient state array "database.Orders"
        // Broadcast a notification that permanent state has changed 
                //"document.dispatchEvent(new CustomEvent("stateChanged"))"

const database = {
    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}

export const getFacilities = () => {
    return database.facilities.map(f => ({...f}))
}

export const purchaseMineral = () => {

        // Broadcast custom event to entire document so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
