import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header h-24 w-full shadow-lg flex justify-between mb-3">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="logo"
          className="logo w-24 h-22 m-0 object-right-bottom "
        />
      </div>
      <div className="nav-items w-1/2 ">
        <ul className="flex justify-around items-center h-full w-full ">
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li>
            <button
              className="w-24 h-12 bg-slate-200 border-solid border-slate-300 border-2 rounded-xl flex items-center justify-center"
              onClick={() => {
                setloginBtn(loginBtn === "Login" ? "Logout" : "Login");
              }}
            >
              {loginBtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
