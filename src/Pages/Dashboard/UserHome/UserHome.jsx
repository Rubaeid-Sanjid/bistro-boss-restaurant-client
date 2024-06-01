import { useContext } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";

const UserHome = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
             <h2>
                Hi, Welcome Back <span>{user.displayName}</span>
            </h2>
        </div>
    );
};

export default UserHome;