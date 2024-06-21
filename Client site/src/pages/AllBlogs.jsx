
import AllBlog from "../components/allBlog/AllBlog";
import { useEffect, useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const AllBlogs = () => {
    

    const [blogs, setBlogs] = useState([])
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/blog?filter=${filter}&search=${search}`)
        .then(data => {
            const blogInfo = data.data;
            setBlogs(blogInfo);
        })
    },[filter,search])

    const handleFilter = e => {
        setFilter(e.target.value)
    }

    const handleSearch = e => {
        e.preventDefault();
        const text = e.target.search.value
        setSearch(text)
    }
    console.log(search)

    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto ">

            <Helmet>
                <title>All Blog || Eternels</title>
            </Helmet>

            <div className="flex items-center">
                <h1 className="text-xl font-semibold bg-[#bb1c1bCC] text-white py-2 px-3 rounded-xl">Blog Data: <span>{blogs.length}</span></h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                    <label htmlFor="sort-by" className="text-xl font-medium text-[#bb1c1bCC]">Sort by:</label>
                    <select onChange={handleFilter} className=" border-gray-600 border-[1px] bg-[#bb1c1bCC] text-white lg:font-medium rounded-lg py-2 px-5 outline-none" name="category" id="category" required>
                        <option value="">All items</option>
                        <option value="education">Education</option>
                        <option value="travelling">Travelling</option>
                        <option value="history">History</option>
                        <option value="agriculture">Agriculture</option>
                        <option value="science">Science</option>
                        <option value="nature">Nature</option>
                    </select>
                </div>

                <div>
                    <form onSubmit={handleSearch} className="flex items-center">
                        <input className="block  py-2 border bg-transparent rounded-l-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="search" name="search" id="search" placeholder="Search here" />
                        <button className="bg-[#bb1c1bCC] py-2 px-3 rounded-r-lg border border-gray-600 text-white font-medium">Search</button>
                    </form>
                </div>
            </div>

            <div className="space-y-5 mt-[150px]">
                {
                    blogs.map(blog => <AllBlog key={blog._id} blog={blog}></AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;