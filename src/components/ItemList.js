import React from "react";
import { RES_LOGO } from "../utils/constants";
import { useDispatch } from "react-redux";
import addItem from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-sm">{item.card.info.dscription}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button
                className="p-2 bg-white shadow-lg"
                onClick={handleAddItem}
              >
                Add +
              </button>
            </div>
            <img src={RES_LOGO + item.card.info.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
