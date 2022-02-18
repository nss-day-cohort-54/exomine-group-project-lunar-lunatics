// Will contain body html.
// Import functions from modules.
/*
import { Facilities } from "./Facilities.js"
import { Governors } from "./Governors.js"
import {Minerals} from "./Minerals.js"
import {Colonies} from "./Colonies.js"
import { Orders } from "./Orders.js"
*/
import {purchaseMineral} from "./database.js"




document.addEventListener(
    "click",
    event => {
        if (event.target.id === "orderButton") {
            `<li>${purchaseMineral()}</li>`
        }
    }
)

export const ExoMine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governors options">
                <h2>Governors</h2>
                "Governors()"
            </section>
            <section class="choices__facility options">
                <h2>Facility</h2>
                "Facilities()"
            </section>
            <section class="choices__minerals options">
                <h2>Minerals</h2>
                "Minerals()"
            </section>
            <section class="choices__colony options">
                <h2>Colonies</h2>
                "Colonies()"
        </section>
        </article>

        <article>
            <button id="orderButton">Space Cart</button>
        
        </article>

        <article class="newPurchases">
            <h2>Space Cart</h2>
            "Orders()"
        </article>
    `
}

