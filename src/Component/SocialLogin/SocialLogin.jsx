import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosPublic from "../../Hook/useAxiosPublic";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        const userInfo = {
          user_name: result.user?.displayName,
          user_email: result.user?.email,
          user_pass: result.user?.uid,
          user_photo: result.user?.photoURL,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
          Swal.fire("Login successful");
          navigate(from, { replace: true });
        });
      })
      .catch((err) => console.error(err));
  };
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
