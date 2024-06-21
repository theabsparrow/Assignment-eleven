import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";


const BlogDetail = () => {
    const { user } = useAuth();
    const { email, displayName, photoURL } = user;
    const blog = useLoaderData();
    const { blogTitle, category, image, longDescribtion, shortDescribtion, userEmail, _id } = blog;
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComment()
    }, [_id])

    const getComment = () => {
        axios(`${import.meta.env.VITE_API_URL}/comment`)
            .then(data => {
                const commentInfo = data.data;
                setComments(commentInfo)
            });
    }

    const handleComment = e => {
        e.preventDefault()
        const comment = e.target.comment.value;
        const visitorName = displayName;
        const visitorPhoto = photoURL;
        const visitorEmail = email;
        const ownerEmail = userEmail;
        const commentId = _id
        if (visitorEmail === ownerEmail) {
            return toast.error("you can't comment in your own blog")
        }

        const commentInfo = { comment, visitorName, visitorPhoto, visitorEmail, ownerEmail, commentId }

        try {
            axios.post(`${import.meta.env.VITE_API_URL}/comment`, commentInfo)
                .then(data => {
                    const commentData = data.data;
                    if (commentData.insertedId) {
                        toast.success("comment added successfully")
                    }
                    e.target.reset()
                    getComment()
                })

        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="px-4 lg:px-[70px] font-roboto min-h-[calc(100vh-466px)] my-10">
            <Helmet>
                    <title>{blogTitle} || Eternels</title>
            </Helmet>

            <div className="border-[1px] border-gray-500 p-4 rounded-xl">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                        <img className="rounded-xl lg:w-[45vw]" src={image} alt="" />
                    </div>
                    <div className="lg:px-5 mt-4">
                        <div className="flex flex-col items-center border-b-[2px] border-dashed border-gray-500 pb-5">
                            <h1 className="text-4xl font-bold text-center">{blogTitle}</h1>
                            <h1 className="text-[22px] text-center font-medium mt-5">Short describtion: <span className="font-normal">{shortDescribtion}</span></h1>
                        </div>
                        <div className="mt-8 border-dashed border-b-[2px] border-gray-500 pb-5">
                            <h1 className="lg:w-[40vw] text-xl font-medium text-center">Long describtion: <span className="text-lg font-normal">{longDescribtion}</span></h1>
                        </div>
                        <div className="mt-5 flex items-center">
                            <h1 className="text-xl font-medium px-3 py-2 rounded-xl bg-[#79C0BA33] text-[#3BC5B8]">Category: <span className="text-lg font-normal">{category}</span></h1>
                        </div>

                        {
                            email === userEmail && <div className="mt-4 border flex items-center justify-center">
                                <Link to={`/updateBlog/${_id}`} className="bg-[#bb1c1b] text-white text-lg text-center font-medium py-2 px-3 rounded-xl w-full hover:bg-black hover:text-white">Update Info</Link>
                            </div>
                        }

                    </div>
                </div>
                <div className="mt-8 ">

                    <form onSubmit={handleComment}>
                        <div className="flex flex-col lg:flex-row gap-3">
                            <label className="text-xl font-medium" htmlFor="comment">You can comment here:</label>
                            <div className="flex flex-row lg:flex-col gap-2 lg:gap-0 lg:items-end">
                                <textarea className="outline-none border rounded-xl bg-transparent  px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" name="comment" id="comment" cols="30" rows="3" placeholder="write your comment"></textarea>
                                <div className="mt-1">
                                    <button className="bg-[#bb1c1b] text-white text-lg font-medium py-2 px-3 rounded-xl hover:bg-black hover:text-white">Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
                <div className="mt-6 space-y-4">
                    {
                        comments.filter(comment => comment.commentId === _id).map((commentinfo) => <div key={commentinfo._id}>
                            <div className="flex gap-4 items-center">
                                <div>
                                    <img className="w-[25vw] lg:w-[4vw] rounded-full" src={commentinfo.visitorPhoto} alt="" />
                                </div>
                                <div className="bg-transparent shadow-xl py-2 px-4 rounded-xl">
                                    <h1 className="text-xl font-medium text-blue-600">{commentinfo.visitorName}</h1>
                                    <h1 className="text-lg ">{commentinfo.comment}</h1>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BlogDetail;