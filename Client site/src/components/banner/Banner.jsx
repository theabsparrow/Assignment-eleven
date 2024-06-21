
import useAuth from "../../hooks/useAuth";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import { motion } from "framer-motion"


const Banner = () => {
    const { blogs } = useAuth()
    const threeBlogs = blogs.slice(0, 4)
    

    return (
        <div className="my-4 px-4 lg:px-[70px] font-roboto mb-16">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    threeBlogs.map((fourBlog) => <SwiperSlide key={fourBlog._id}>
                        <div style={{ backgroundImage: `url(${fourBlog.image})` }} className="bg-no-repeat bg-center bg-cover h-[80vh] rounded-xl px-5 py-5">
                            <div className="flex flex-col items-center justify-center mt-20">
                                <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-6xl font-bold text-[#bb1c1b] bg-[#ACA5A580] px-5 py-3 rounded-lg">{fourBlog.blogTitle}</motion.h1>
                                <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="mt-20">
                                    <Link to= {`/blog-detail/${fourBlog._id}`} className="bg-[#bb1c1b] py-3 px-4 rounded-xl text-lg font-medium text-white hover:bg-black hover:text-[#bb1c1b]"> See Details</Link>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default Banner;