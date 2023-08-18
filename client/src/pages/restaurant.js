//import RestaurantSearch from "../components/filter"
import Card from "../components/restaurantCard"

export default function Restaurant() {
    return(
        <div className="restaurant-layout">
            <div className="side-filter">
                <h2 className="filter-header">Filter</h2>
                <ul className="cuisine"><h3>Cuisine</h3>
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
        </div>
    )
}