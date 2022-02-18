//import { getColonyMinerals, getMinerals } from "./database.js"
/*
document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "orders") {
            window.alert(`${event.target.value}`)
        }
    }
)
*/
/*

const buildOrderListItem = (purchase) => {
    
    
        const minerals = getMinerals()
        
        // Remember that the function you pass to find() must return true/false
        // Repeat the below .find function as needed for ordered items and relevant govs/colonies.
        const foundMinerals = minerals.find(
            (mineral) => {
                for (const mineral of minerals) 
                if(mineral.id === purchase.mineralId)
                return mineral.xxxxxxxxxxxxx // maybe mineral.quantity
            }
        )
        
        
        const totalAmount = ({}) // However we will calculate quantity outputs
        
        
        const quantityString = totalAmount.toLocaleString({})
        
        //Undecided on the below listing representation of returned orders results.
        return `<li>
            Order ${order} 
        </li>`
}



export const Orders = () => {

    const orders = getColonyMinerals()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
*/