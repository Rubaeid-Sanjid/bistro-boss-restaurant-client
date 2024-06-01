import { FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdPayments, MdRateReview, MdShoppingBag } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../Hook/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="container mx-auto px-3 lg:px-12 flex">
      <div className="w-1/4 min-h-screen bg-[#D1A054]">
        <ul className="menu uppercase p-4 space-y-2 mt-12">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashboard/adminHome"}>
                  <FaHome></FaHome>
                  Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/addItems"}>
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageItems"}>
                  <FaList></FaList>
                  manage items
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/manageBookings"}>
                  <FaBook></FaBook>
                  Manage bookings
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/allUsers"}>
                  <FaUsers/>
                  all users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashboard/userHome"}>
                  <FaHome></FaHome>
                  User Home
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
              <li>
                <NavLink to={"/dashboard/cart"}>
                  <FaShoppingCart></FaShoppingCart>
                  My cart
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/review"}>
                <MdRateReview />
                  add review
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard/bookings"}>
                  <FaBook/>
                  my booking
                </NavLink>
              </li>
            </>
          )}

          <div className="divider"></div>
          <li>
            <NavLink to={"/"} className={"uppercase"}>
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"} className={"uppercase"}>
              <FiMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/:category"} className={"uppercase"}>
              <MdShoppingBag /> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/"} className={"uppercase"}>
              <FaEnvelope></FaEnvelope> Contact
            </NavLink>
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
