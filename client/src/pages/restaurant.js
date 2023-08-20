//import RestaurantSearch from "../components/filter"
import Card from "../components/restaurantCard"
import Filter from "../components/filter"

export default function Restaurant() {
    return(
        <div className="restaurant-page">
            <Filter />
                <div className="restaurant-card">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
        </div>
    )
}