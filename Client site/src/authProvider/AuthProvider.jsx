import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import axios from "axios";
import toast from "react-hot-toast";
import useAxiosSecure from "../hooks/useAxiosSecure";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);
    const [blogs, setBlogs] = useState([]);
    const axiosSecure = useAxiosSecure();

    // handle all wishlist button
    const handleAllWishlistButton = async (wishlistBlog) => {
        const wishlistBlogInfo = wishlistBlog
       
        try {
           const {data} = await axiosSecure.post(`/wishlist`, wishlistBlogInfo)
                console.log(data)
                toast.success("blog added successfully")

        }
        catch (error) {
           
            toast.error(error.response.data)
           
        }
    }


    // api fatching
    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/blog`)
            .then(data => {
                const blogInfo = data.data;
                setBlogs(blogInfo);
            })
    }, [])

    // user creation
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (name, photo) => {
        setLoader(true)
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // user login
    const userLogin = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const loginWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logout = () => {
        setLoader(true)
        return signOut(auth)
    }

    // state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            const userEmail = currentUser?.email || user?.email
            const currentUserEmail = { email: userEmail };
            setUser(currentUser);
            setLoader(false)
            // if current user exists
            if (currentUser) {

                axios.post(`${import.meta.env.VITE_API_URL}/jwt`, currentUserEmail, { withCredentials: true })
                    .then(res => {

                    })
            }
            else {
                axios.post(`${import.meta.env.VITE_API_URL}/logout`, currentUserEmail, {
                    withCredentials: true
                })
                    .then(res => {

                    })
            }
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = { user, setUser, createUser, loader, updateUserProfile, userLogin, loginWithGoogle, logout, blogs, handleAllWishlistButton }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;