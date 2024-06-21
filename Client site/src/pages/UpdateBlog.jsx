import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";


const UpdateBlog = () => {
const blog = useLoaderData()
const {user, loader} = useAuth()
const {blogTitle, category, image, longDescribtion, shortDescribtion, _id, userEmail} = blog;
const navigate = useNavigate()
useEffect(() => {
        if(user.email !== userEmail){
            navigate('/')
        }
},[navigate, user.email,userEmail])


    const handleUpdateBlog = (e) => {
        e.preventDefault()
        const blogTitle = e.target.blog_title.value;
        const category = e.target.category.value;
        const image = e.target.image.value;
        const shortDescribtion = e.target.short_describtion.value;
        const longDescribtion = e.target.long_describtion.value;

        const updateInfo = {blogTitle, category, image, shortDescribtion,longDescribtion};
        try {
            axios.put(`${import.meta.env.VITE_API_URL}/blog/${_id}`, updateInfo)
            .then(data =>{
                const blogData = data.data;
                
                if(blogData.modifiedCount > 0){
                    toast.success("blog updated successfully")
                    const dynamicRout = `/blog-detail/${_id}`
                    navigate(dynamicRout)
                }
                
                
            })
            
        }
        catch (err){
            toast.error(err.message)
        }
    }
    if((user.email !== userEmail) || loader){
        return
    }
    return (
        <div className="px-4 lg:px-[70px] font-roboto min-h-[calc(100vh-466px)] my-10">

            <Helmet>
                <title>Update || {blogTitle} </title>
            </Helmet>
            <div className="flex justify-center">
                <div className="md:w-[90vw] lg:w-[35vw] p-6 border-[1px] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className=" text-2xl font-semibold  capitalize sm:text-3xl ">Update blog info</h1>
                    </div>

                    <form onSubmit={handleUpdateBlog}>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-6">
                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium" htmlFor="blog-title"> Blog title :</label>
                                <input type="text" name="blog_title" className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="blog title" defaultValue={blogTitle} required />
                            </div>

                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium" htmlFor="category">Choose category :</label>
                                <select className="w-full border-gray-600 border-[1px] bg-[#bb1c1bCC] text-white rounded-lg py-2 px-5 outline-none" name="category" defaultValue={category} id="category" required>
                                    <option value="education">Education</option>
                                    <option value="travelling">Travelling</option>
                                    <option value="history">History</option>
                                    <option value="agriculture">Agriculture</option>
                                    <option value="science">Science</option>
                                    <option value="nature">Nature</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-medium" htmlFor="image">Image URL :</label>
                            <input type="text" name='image' className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="insert imageURL"  defaultValue={image}required />
                        </div>

                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-medium" htmlFor="describtion">Short-describtion :</label>
                            <input type="text" name='short_describtion' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="write a short describtion" defaultValue={shortDescribtion} required />
                        </div>


                        <div className='mt-3 space-x-2 flex flex-col'>
                            <label className="text-lg font-medium" htmlFor="describe">Long-describtion :</label>
                            <textarea className="outline-none border-gray-600 border-[1px] rounded-xl px-6 pt-3 bg-transparent" name="long_describtion" id="long-describtion" cols="30" rows="5" defaultValue={longDescribtion} placeholder="write a long describtion" required></textarea>
                        </div>

                        <div className='mt-4'>
                            <button className="w-full px-6 py-3 text-lg font-medium text-white bg-[#bb1c1b] rounded-lg hover:bg-black ">
                                Update
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;