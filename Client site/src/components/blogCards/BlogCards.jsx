import useAuth from "../../hooks/useAuth";
import BlogCard from "../blogCard/BlogCard";
import { motion } from "framer-motion"

const BlogCards = () => {
    const {blogs} = useAuth()
    const lastSixCards = blogs.slice(-6);
    return (
        <div className="px-4 lg:px-[70px] font-roboto mb-20">
            <div className="text-center">
                <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-4xl font-bold">Recent Blogs are shown here</motion.h1>
                <motion.p whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="lg:w-[50vw] mx-auto mt-4 text-lg font-medium">in this section we are showing our six recent blogs. that are dynamically updated. you can find the letest added six blogs here for your checking or visiting or reading</motion.p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    lastSixCards.map(lastSixCard => <BlogCard key={lastSixCard._id} lastSixCard={lastSixCard}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default BlogCards;