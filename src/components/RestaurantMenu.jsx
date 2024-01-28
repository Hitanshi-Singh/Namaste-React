import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import Rest from "../utils/dummyRes.jsx";

const RestaurantMenuItems = ({ e }) => {
  return (
    <div className="">
      {e.card.card.itemCards.map((elem) => {
        return (
          <div className="  p-2 m-2 border-transparent border-b-gray-200 border-2 flex justify-between">
            <div className="w-2/3">
              <div className="font-semibold">{elem.card.info.name}</div>
              <div className="text-gray-500  text-sm">
                {elem.card.info.isVeg ? "🟢 Veg" : "🔴 Non-Veg"}
              </div>
              <div className="text-gray-400 font-thin text-sm">
                <p> {elem.card.info.description}</p>
              </div>
            </div>

            <div className="relative">
              <img
                src={
                  `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/` +
                  elem.card.info.imageId
                }
                alt=""
                className="w-24 rounded-xl"
              />
              <div className=" absolute bottom-0 w-full ">
                <button className="px-2 py-1 mx-auto block bg-white/50 backdrop-blur-sm rounded-lg">
                  Add +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const RestaurantMenu = () => {
  // const { resId } = useParams();
  const resInfo = Rest.data;
  const { name, avgRating, areaName, cuisines, totalRatingsString } =
    resInfo?.cards[0].card?.card?.info;

  console.log(resInfo);
  if (resInfo.length == 0) return <Shimmer />;
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="m-2 p-2 ">
      <div className="w-2/3 px-5 py-3 mx-auto rounded-xl bg-slate-50 my-2 shadow-md flex justify-between">
        <div>
          <h1 className="font-bold mb-5">{name}</h1>
          <p className="text-gray-500">{cuisines.join(", ")}</p>
          <p className="text-gray-500">{areaName}</p>
        </div>
        <div className="m-2 p-2 border-2 w-20 text-sm text-center rounded-xl">
          <p className="p-2 border-b-2 border-dashed">{avgRating}⭐</p>
          <p className="text-green-700 font-semibold">{totalRatingsString}</p>
        </div>
      </div>

      <div>
        {categories.map((e) => {
          const [showItems, setShowItems] = useState(false);
          const handleClick = () => {
            setShowItems(!showItems);
          };
          return (
            <div className=" w-2/3 px-5 py-2 mx-auto rounded-xl bg-slate-50 my-2 shadow-md">
              <div className="h-10 flex justify-between items-center rounded-xl">
                <p className="font-bold">{e.card.card.title}</p>
                <div className="w-6 cursor-pointer">
                  <img
                    onClick={handleClick}
                    className="w-full"
                    src="https://static.vecteezy.com/system/resources/previews/006/827/566/non_2x/down-arrow-icon-sign-symbol-logo-vector.jpg"
                    alt=""
                  />
                </div>
              </div>
              {showItems && <RestaurantMenuItems e={e} />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
