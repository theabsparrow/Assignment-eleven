import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";


const FeaturedBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const { user, handleAllWishlistButton } = useAuth()

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/blog`)
            .then(data => {
                const blogInfo = data.data;
                const sortedBlog = blogInfo.sort((a, b) => b.longDescribtion.split(" ").length - a.longDescribtion.split(" ").length).slice(0, 10);
                setBlogs(sortedBlog)
            })
    }, [])

    const handleWishlist = (wishlistBlogTitle, wishlistCategory, ownerName, wishlistImage, wishlistShortDescribtion, wishlistLongDescribtion, ownerPhoto, ownerEmail , wishlistID) => {

        const visitorEmail = user.email;

        const wishlistInfo = { wishlistBlogTitle, wishlistCategory, wishlistImage, wishlistLongDescribtion, wishlistShortDescribtion, ownerName, ownerPhoto, ownerEmail, visitorEmail, wishlistID }
        handleAllWishlistButton(wishlistInfo)
    }

    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto">
            <Helmet>
                <title>Featured Blog || Eternels</title>
            </Helmet>

            <section className="container px-4 mx-auto">
                <div className="flex flex-col">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">


                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <tr>
                                            <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Serial Num
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Blog Title
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Category
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Blog Owner
                                            </th>

                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Profile
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Detail
                                            </th>
                                            <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                                Add
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                        {
                                            blogs.map((blog, index) => <tr key={blog._id}>
                                                <td className="px-4 py-4 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap">
                                                    {index + 1}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {blog.blogTitle}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {blog.category}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    {blog.name}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <img className="w-[5vw] rounded-full" src={blog.photo} alt="" />
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap ">
                                                    <Link to={`/blog-detail/${blog._id}`} className="bg-[#bb1c1b] py-2 px-3 rounded-xl hover:bg-black">See Detail</Link>
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                                                    <Link onClick={() => handleWishlist(blog.blogTitle, blog.category, blog.name, blog.image, blog.shortDescribtion, blog.longDescribtion, blog.photo, blog.userEmail, blog._id)} className="bg-[#bb1c1b] py-2 px-3 rounded-xl hover:bg-black">Add wishlist</Link>
                                                </td>
                                            </tr>)
                                        }


                                    </tbody>
                                </table>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FeaturedBlogs;