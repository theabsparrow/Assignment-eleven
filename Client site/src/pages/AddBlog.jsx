import axios from "axios";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AddBlog = () => {
    const {user} = useAuth()
    const {displayName,email, photoURL} = user;
const handleAddBlog = e => {
    e.preventDefault()
    const blogTitle = e.target.blog_title.value;
    const category = e.target.category.value;
    const image = e.target.image.value;
    const shortDescribtion = e.target.short_describtion.value;
    const longDescribtion = e.target.long_describtion.value;
    const name = displayName;
    const photo = photoURL;
    const userEmail = email;
    const blogInfo = {blogTitle, category, image, shortDescribtion, longDescribtion, name, photo, userEmail}
    
    try {
        axios.post(`${import.meta.env.VITE_API_URL}/blog`, blogInfo)
        .then(data =>{
            const blogData = data.data;
            if(blogData.insertedId) {
                toast.success("blog added successfully")
            }
            e.target.reset()
        })
        
    }
    catch (err){
        console.log(err.message)
    }
}
    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto">
            <Helmet>
                <title>Add Blog || Eternels</title>
            </Helmet>
            <div className="flex justify-center">
                <div className="md:w-[90vw] lg:w-[35vw] p-6 border-[1px] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className=" text-2xl font-semibold  capitalize sm:text-3xl ">Add a blog</h1>
                    </div>

                    <form onSubmit={handleAddBlog}>
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-6">
                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium" htmlFor="blog-title"> Blog title :</label>
                                <input type="text" name="blog_title" className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="blog title" required />
                            </div>

                            <div className="flex flex-col lg:w-[49%]">
                                <label className="text-lg font-medium" htmlFor="category">Choose category :</label>
                                <select className="lg:w-full border-gray-600 border-[1px] bg-[#bb1c1bCC] text-white rounded-lg py-2 px-2 lg:px-5 outline-none" name="category" id="category" required>
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
                            <input type="text" name='image' className="block  py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="insert imageURL" required/>
                        </div>

                        <div className="flex flex-col mt-3">
                            <label className="text-lg font-medium" htmlFor="describtion">Short-describtion :</label>
                            <input type="text" name='short_describtion' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="write a short describtion" required />
                        </div>


                        <div className='mt-3 space-x-2 flex flex-col'>
                            <label className="text-lg font-medium" htmlFor="describe">Long-describtion :</label>
                            <textarea className="outline-none border-gray-600 border-[1px] rounded-xl px-6 pt-3 bg-transparent" name="long_describtion" id="long-describtion" cols="30" rows="5" placeholder="write a long describtion" required></textarea>
                        </div>

                        <div className='mt-4'>
                            <button className="w-full px-6 py-3 text-lg font-medium text-white bg-[#bb1c1b] rounded-lg hover:bg-black ">
                               Submit
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddBlog;