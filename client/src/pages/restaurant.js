//import RestaurantSearch from "../components/filter"
import Card from "../components/restaurantCard"

export default function Restaurant() {
    return(
        <>
        <div className="side-filter">
            <h1 className="filter-header">filter bar</h1>
            <ul className="cuisine"><h2>Cuisine</h2>
                <li>
                    Indian
                </li>
                <li>
                    Italian
                </li>
                <li>
                    Chinese
                </li>
            </ul>
        </div>
        <div className="restaurant-card">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </>
    )
}