import RestaurantCard, { HighRating } from "./RestaurantCard";

import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const RatedRestaurantCard = HighRating(RestaurantCard);
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
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json.data?.cards[4].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false) {
    return (
      <h1>
        Looks Like you are so broke that you can't even afford a good internet
        connection
      </h1>
    );
  }
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
      <div className="flex flex-wrap">
        {filteredRestaurants.map((element) => (
          <Link
            to={"/restaurants/" + element.info.id}
            className="resCardLink"
            key={element.info.id}
          >
            {element.info.avgRating > 4.3 ? (
              <RatedRestaurantCard key={element.info.id} resData={element} />
            ) : (
              <RestaurantCard key={element.info.id} resData={element} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
