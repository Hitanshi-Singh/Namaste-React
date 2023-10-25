import RestaurantCard from "./RestaurantCard";
import SearchBox from "./SearchBox";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <SearchBox />
      <button
        id="topRated"
        onClick={() => {
          filtered = listOfRestaurants.filter(
            (elem) => elem.info.avgRating > 4
          );
          setListOfRestaurants(filtered);
          console.log(listOfRestaurants);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {listOfRestaurants.map((element) => (
          <RestaurantCard key={element.info.id} resData={element} />
        ))}
      </div>
    </div>
  );
};

export default Body;
