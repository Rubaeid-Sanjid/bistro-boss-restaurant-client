import { FaCalendar, FaHome, FaShoppingCart } from "react-icons/fa";
import { MdPayments } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-3 lg:px-12 flex">
      <div className="w-1/4 min-h-screen bg-[#D1A054]">
        <ul className="menu p-4 space-y-2">
          <li>
            <NavLink to={"/dashboard/user"}>
              <FaHome></FaHome>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart></FaShoppingCart>
              My cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar></FaCalendar>
              reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <MdPayments />
              payment history
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
          <NavLink to={"/"}><FaHome></FaHome> Home</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
