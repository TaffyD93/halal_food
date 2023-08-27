//import { useState } from "react"

const cuisine = [{id: 1, name: "Burger"}, {id: 2, name: "Chinese"}, {id: 3, name: "Indian"},{id: 4, name: "Middle Eastern"}, {id: 5, name: "Fast Food"}]
const halal = [{id: 1, name:"Fully Halal"}, {id: 2, name:"Partly Halal"}]
const location = [{id: 1, name:"Marylebone"}, {id: 2, name:"Soho"}, {id: 3, name:"Mayfair"}, {id: 4, name:"Kings Cross"}, {id: 5, name:"Camden Market"}]

export default function RecommendationSelection() {
    return(
        <div className="recommendation">
            <h1>Recommendation</h1>
            <p>Pick one from each row</p>
        <ul>
            <h3>Cuisine</h3>
                <ul className="options">
                    {cuisine.map((cuisine, key) => {
                        return(
                           <li key={cuisine.id}>{cuisine.name}</li>
                        )
                    })}
                </ul>
            <h3>Halal Status</h3>
                <ul className="options">
                    {halal.map((halal, key) => {
                        return(
                            <li key={halal.id}>{halal.name}</li>
                        )
                    })}
                </ul>
            <h3>Location</h3>    
                <ul className="options">
                    {location.map((location, key) => {
                        return(
                            <li key={location.id}>{location.name}</li>
                        )
                    })}
                </ul>
        </ul>
        <br />
        <div>
            <h4>Ooooo very nice, based on your preference you should check out:</h4>
        </div>
        </div>
    ) 
}

//make an object array of the buttons
//set a query to each button
//map though buttons