import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hook/useCart";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  const [carts] = useCart();

  const handleLogout = () => {
    logoutUser()
      .than(() => {})
      .catch((error) => console.error(error));
  };
  const navlink = (
    <>
      <NavLink to={"/"} className={"mx-3 text-lg font-semibold"}>
        Home
      </NavLink>
      <NavLink to={"/menu"} className={"mx-3 text-lg font-semibold"}>
        Menu
      </NavLink>
      <NavLink to={"/order/salad"} className={"mx-3 text-lg font-semibold"}>
        Our Shop
      </NavLink>
      <NavLink to={"/dashboard"} className={"mx-3 text-lg font-semibold"}>
        <button className="btn btn-ghost text-white">
          <FaShoppingCart />
          <div className="badge badge-secondary">+{carts.length}</div>
        </button>
      </NavLink>
    </>
  );

  return (
    <div>
      <div
        className="fixed z-10 bg-black text-white navbar"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            BISTRO BOSS <br />
            Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navlink}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img title={user.displayName} src={user.photoURL} />
                </div>
              </div>
              <button className="btn btn-ghost" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <NavLink to={"/login"} className={"mx-3 text-lg font-semibold"}>
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
