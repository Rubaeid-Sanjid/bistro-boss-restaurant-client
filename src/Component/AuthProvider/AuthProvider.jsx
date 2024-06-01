import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/FirebaseConfig";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../../Hook/useAxiosPublic";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const axiosPublic = useAxiosPublic();

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = ()=>{
    setLoader(true)
    return signInWithPopup(auth, provider)
  }

  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logoutUser = () => {
    setLoader(true);
    return signOut(auth);
  };

  const updateUser = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        const userInfo = {email: currentUser.email}
        axiosPublic.post('/jwt', userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem("token", res.data.token)
            setLoader(false);
          }
        })
      }
      else{
        localStorage.removeItem('token')
      }
      setLoader(false);
    });

    return () => {
      return unSubscribe();
    };
  }, [axiosPublic]);

  const authInfo = {
    user,
    loader,
    createUser,
    loginUser,
    logoutUser,
    updateUser,
    googleSignIn
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
