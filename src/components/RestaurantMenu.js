import React, { useEffect, useState } from "react";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const [showIndex, setShowIndex] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) {
    return <RestaurantCardShimmer />;
  }

  // const { name, cuisines, costForTwoMessage } =
  //   resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <div className="text-center">
      <h1>{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
      <h2>{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(", ")}</h2>
      {/* <h3>{costForTwoMessage}</h3> */}
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li>
            {item.card.info.name} -{" Rs."}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul> */}
      {/* categories accordion */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
