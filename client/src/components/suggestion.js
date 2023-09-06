import { useState } from "react"
import Axios from "axios"

const cuisine = [{id: 1, name: "Burger"}, {id: 2, name: "Chinese"}, {id: 3, name: "Indian"},{id: 4, name: "Middle Eastern"}, {id: 5, name: "Fast Food"}]
const halal = [{id: 1, name:"Halal"}, {id: 2, name:"Partly Halal"}]
const location = [{id: 1, name:"Marylebone"}, {id: 2, name:"Soho"}, {id: 3, name:"Mayfair"}, {id: 4, name:"Kings Cross"}, {id: 5, name:"Camden Market"}]

export default function SuggestionSelection() {
    
    const [halalSuggestion, setHalalSuggestion] = useState([])
    const [cuisineChoice, setCuisineChoice] = useState("")
    const [halalChoice, setHalalChoice] = useState("")
    const [locationChoice, setLocationChoice] = useState("")

    const [click, setClick] = useState(false)


    const handleCuisineInput = (e)=>{  
        setCuisineChoice(e.target.value)
        setClick(current => !current)
    }

    const handleHalalInput = (e)=>{
        setHalalChoice(e.target.value)
    }

     const handleLocationInput = (e)=>{
        setLocationChoice(e.target.value)
    }

    const getHalalSuggestion = () => {
        Axios.post("http://localhost:3001/suggestion", 
        {choiceOne: cuisineChoice, choiceTwo: halalChoice, choiceThree: locationChoice},
        ).then((response) => {
            if (response.data && response.data.length > 0) {
                setHalalSuggestion([])
                console.log("halalSuggestion")
                let randNo = Math.floor((Math.random() * response.data.length));
                console.log(randNo)
                var randomHalal = response.data[randNo];
                console.log(response.data[randNo])
                var randomHalalArray = [randomHalal]
                setHalalSuggestion(randomHalalArray)
            } else {
                alert("nothing")
            }
        })
        .catch((error) => {
            console.log("the error is", error)
        })
    }


    return(
        <div className="suggestion">
            <h1>Suggestion</h1>
            <p>Pick one from each row</p>
        <ul>
            <h3>Cuisine</h3>
                <ul className="options">
                    {cuisine.map((cuisine, key) => {
                        return(
                            <div key={cuisine.id} onClick={e => handleCuisineInput(e,"value")}>
                           <button className={click ? 'clicked' : ''} value={cuisine.name}>{cuisine.name}</button>
                           </div>
                        )
                    })}
                </ul>
            <h3>Halal Status</h3>
                <ul className="options">
                    {halal.map((halal, key) => {
                        return(
                            <div key={halal.id} onClick={e => handleHalalInput(e, "value")}>
                            <button value={halal.name}>{halal.name}</button>
                            </div>
                        )
                    })}
                </ul>
            <h3>Location</h3>    
                <ul className="options">
                    {location.map((location, key) => {
                        return(
                            <div key={location.id} onClick={e => handleLocationInput(e,"value")}>
                            <button value={location.name}>{location.name}</button>
                            </div>
                        )
                    })}
                </ul>
        </ul>
        <br />
        <button className="submit" onClick={getHalalSuggestion}>Give me a restaurant</button>
        <br />
        <div>
            <h4>Ooooo very nice, based on your preference you should check out:</h4>
            {halalSuggestion.map((halal, key) => {
                    return(
                        <div key={halal.restaurant_id}>{halal.restaurant_name}</div>
                    )
            })}
        </div>
        </div>
    ) 
}


