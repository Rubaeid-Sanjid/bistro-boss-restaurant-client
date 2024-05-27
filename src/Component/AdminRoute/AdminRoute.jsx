import { useContext } from "react";
import useAdmin from "../../Hook/useAdmin";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();

  if (loader || isAdminLoading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-spinner w-24"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to={"/login"} state={{from: location}} ></Navigate>;
};

export default AdminRoute;