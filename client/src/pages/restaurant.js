//import RestaurantSearch from "../components/filter"
//import Card from "../components/restaurantCard"
import Filter from "../components/filter"
import { useState, useEffect } from "react"
import Axios from "axios"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import image1 from '../images/Bill_or_beak.jpeg'
import image2 from '../images/chicken-shawarma.jpeg'
import image3 from '../images/fried-chicken_2.0.jpeg'



export default function Restaurant() {

    const foodImages = [image1, image2, image3]

    const [restaurantList, setRestaurantList] = useState([])
    useEffect(() => {
        Axios.get("http://localhost:3001/restaurants").then((response) => {
            setRestaurantList(response.data)
        })
    },[])

    return(
        <div className="restaurant-page">
            <Filter />
                <div className="restaurant-card">
                {restaurantList.map((val, key) => {
                    return(
                        <Card sx={{
      bgcolor: 'rgba(255, 255, 255, 0.7)',
      boxShadow: 1,
      borderRadius: 2,
      minWidth: "150px",
      width: "30%"
    }} key={val.restaurant_id}>
      <CardHeader
        title={val.restaurant_name}
      />
      <CardMedia
        component="img"
        height="200px"
        image={foodImages.map((key) => (
          <img src={key} />
        ))}
        alt={val.restaurant_name}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {val.restaurant_location}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
                    )
                })}
                </div>
        </div>
    )
}