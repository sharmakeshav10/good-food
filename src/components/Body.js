import { useEffect, useState } from "react";
import restaurantList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState(
    []
  );

  // const [btnName, setBtnName] = useState("Login");

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurantData();
  }, []);

  const getRestaurantData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5355161&lng=77.3910265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const searchRestaurantHandler = () => {
    const filteredRestaurants = listOfRestaurants.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListOfRestaurants(filteredRestaurants);
  };

  const filterTopRated = () => {
    const filteredData = listOfRestaurants.filter(
      (res) => res.data.costForTwo > 300
    );
    setListOfRestaurant(filteredData);
  };

  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  return (
    <div className="body">
      <div className="flex items-center justify-center">
        <div className="search p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black p-2"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg"
            onClick={searchRestaurantHandler}
          >
            Search
          </button>
        </div>
        <div className="button p-4 m-4">
          <button
            className="filter-button px-4 py-2 bg-green-100 rounded-lg"
            onClick={filterTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      {/* <button
        onClick={() => {
          btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
        }}
      >
        {btnName}
      </button> */}

      {listOfRestaurants.length === 0 ? (
        <RestaurantCardShimmer />
      ) : (
        <div className="flex flex-wrap">
          {filteredListOfRestaurants.map((restaurant) => {
            // {
            //   restaurant.data.promoted ? (
            //     <RestaurantCardWithPromotedLabel restaurantData={restaurant} />
            //   ) : (
            //     <RestaurantCard
            //       restaurantData={restaurant}
            //       key={restaurant.info.id}
            //     />
            //   );
            // }
            return (
              <Link
                key={restaurant.info.id}
                to={"/restaurants/" + restaurant.info.id}
              >
                <RestaurantCard restaurantData={restaurant} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
