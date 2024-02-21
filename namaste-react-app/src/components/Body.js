import RestaurantCardComponent from "./RestaurantCard";
import {useEffect, useState} from "react";
import { CARDS } from "../utils/mockData";
const BodyComponent = () => {
    const [resCards, setCards] = useState(CARDS)

    function filterRestaurant() {
        setCards(resCards.filter(resCard => resCard.card.card.info.avgRating >= 4.3))
    }

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={filterRestaurant}>Top Rated Restaurant</button>
            </div>
            <div className='res-container'>
                {resCards.map(restaurantCard => {
                return <RestaurantCardComponent key={restaurantCard.card.card.info.id} resCard= {restaurantCard} />
                })}
            </div>
        </div>
    )
}

export default BodyComponent;