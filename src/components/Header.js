import { Link } from "react-router-dom";
import { APP_LOGO } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between">
      <div>
        <img className="w-56" src={APP_LOGO} />
      </div>

      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-8">
            <Link to="/">Home</Link>
          </li>
          <li className="px-8">
            <Link to="/about">About</Link>
          </li>
          <li className="px-8">Contact</li>
          <li className="px-8">Search</li>
          <li className="px-8">
            <Link to="/cart">Cart - {cartItems.length} items</Link>
          </li>
          <li className="px-8">
            <button
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              Login
            </button>
          </li>
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
