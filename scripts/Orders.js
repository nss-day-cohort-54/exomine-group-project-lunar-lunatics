import { getOrders, getMinerals, getGovernors } from "./database.js"
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

const orders = getOrders()

const buildOrderListItem = (order) => {
    
    
        const sizes = getMinerals()
        
        // Remember that the function you pass to find() must return true/false
        // Repeat the below .find function as needed for ordered items and relevant govs/colonies.
        const foundMinerals = minerals.find(
            (mineral) => {
                for (const mineral of minerals) 
                if(mineral.id === order.mineralId)
                return mineral.xxxxxxxxxxxxx? // maybe mineral.quantity
            }
        )
        
        
        const totalAmount = // However we will calculate quantity outputs
        
        
        const quantityString = totalAmount.toLocaleString({ /* Whatever we use to calculate quantities. */ })
        
        //Undecided on the below listing representation of returned orders results.
        return `<li>
            Order ${} 
        </li>`
}



// Mayeb keep the below as is?, Its most likely good to go.
export const Orders = () => {
   
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}
