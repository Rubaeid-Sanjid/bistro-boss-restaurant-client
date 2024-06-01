import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";
import { IoWallet } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";

const AdminHome = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-3 lg:px-12">
      <h2 className="text-4xl font-semibold my-10">
        Hi, Welcome Back <br /> <span className="text-orange-400">{user.displayName}</span>
      </h2>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <IoWallet className="text-3xl" />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">${stats?.revenue}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-3xl"></FaUsers>
          </div>
          <div className="stat-title">Customers</div>
          <div className="stat-value">{stats?.users}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <AiFillProduct className="text-3xl" />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menus}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <MdLocalShipping className="text-3xl" />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
