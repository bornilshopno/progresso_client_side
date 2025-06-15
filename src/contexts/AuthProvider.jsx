import { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { app } from "../auths/firebase_auth";
import AuthContext from "./AuthContext";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

   
    const axiosPublicly=useAxiosPublic()
    const axiosSecure= useAxiosSecure()
    const auth = getAuth(app);
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        setLoading(true);
        setUser(null);
        return signOut(auth)
    }
    const provider = new GoogleAuthProvider()
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);     
            // if(currentUser?.email){
            //     const user={email: currentUser.email};
            //     axiosPublicly.post("/jwt" ,user)
            //     .then(res=> {
            //         setLoading(false)
            //     })
            // }
            // else{
            //     axiosPublicly.post("/logout" ,{})
            //     .then(res=> {console.log(res.data);
            //         setLoading(false)
            //     })
            //     .catch(error => {
            //         console.error('Error during logout:', error);
            //     });
            // }
        
        })

        return () => unSubscribe();
    }, [auth])
      console.log(user)

    const authInfo = { loading, setLoading, createUser, loginUser, user, setUser, userSignOut, googleSignIn, auth }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;