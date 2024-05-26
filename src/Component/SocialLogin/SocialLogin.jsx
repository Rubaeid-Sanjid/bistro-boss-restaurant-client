import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const {googleSignIn} = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
  
    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(()=> {
            Swal.fire("Login successful");
        navigate(from, {replace: true})
        })
        .catch(err=> console.error(err))
    }
    return (
        <div className="mt-2">
            <button onClick={handleGoogleSignIn} className="btn w-full">
                <FaGoogle></FaGoogle>
                Google
            </button>
        </div>
    );
};

export default SocialLogin;