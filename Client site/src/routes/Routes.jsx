import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AllBlogs from "../pages/AllBlogs";
import FeaturedBlogs from "../pages/FeaturedBlogs";
import AddBlog from "../pages/AddBlog";
import Wishlists from "../pages/Wishlists";
import UpdateBlog from "../pages/UpdateBlog";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/errorPage/ErrorPage";
import PrivateRout from "./PrivateRout";
import BlogDetail from "../pages/BlogDetail";
import WishlistDetail from "../pages/WishlistDetail";


export const router = createBrowserRouter([
    {
        path:"/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/allBlogs",
                element: <AllBlogs></AllBlogs>,
            },
            {
                path: "/featuredBlogs",
                element: <FeaturedBlogs></FeaturedBlogs>,
            },
            {
                path: "/addBlog",
                element: <PrivateRout><AddBlog></AddBlog></PrivateRout>,
            },
            {
                path: "/wishLists",
                element: <PrivateRout><Wishlists></Wishlists></PrivateRout>,
            },
            {
                path: '/updateBlog/:id',
                element: <PrivateRout><UpdateBlog></UpdateBlog></PrivateRout>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivateRout><Profile></Profile></PrivateRout>,
            },
            {
                path: "/Login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/blog-detail/:id",
                element: <PrivateRout><BlogDetail></BlogDetail></PrivateRout>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/blog/${params.id}`)
            },
            {
                path: "/wishlist-detail/:id",
                element: <PrivateRout><WishlistDetail></WishlistDetail></PrivateRout>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/wishlist/${params.id}`)
                
            }
        ]
    }
])