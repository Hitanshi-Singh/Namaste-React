import RestaurantCard from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data.cards[2].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filters">
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
        <div className="searchBox m-secondary">
          <input
            type="search"
            name=""
            id="searchBar"
            className="side-margin"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toUpperCase().includes(searchText.toUpperCase())
              );
              setfilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((element) => (
          <RestaurantCard key={element.info.id} resData={element} />
        ))}
      </div>
    </div>
  );
};

export default Body;
