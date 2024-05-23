import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlink = (
    <>
    <NavLink to={"/"} className={'mx-3 text-lg font-semibold'}>Home</NavLink>
    <NavLink to={"/menu"} className={'mx-3 text-lg font-semibold'}>Menu</NavLink>
    <NavLink to={"/order/salad"} className={'mx-3 text-lg font-semibold'}>Our Shop</NavLink>
    <NavLink to={"/login"} className={'mx-3 text-lg font-semibold'}>Login</NavLink>
</>
  );

  return (
    <div>
      <div className="fixed z-10 bg-black text-white navbar" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>
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
          <ul className="menu menu-horizontal px-1">
          {navlink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
