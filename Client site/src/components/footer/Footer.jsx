import { Link } from "react-router-dom";
import logo from '../../../src/assets/logo.png'
import { FiYoutube } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa6";
import { motion } from "framer-motion"

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 px-4 lg:px-[70px] font-roboto">
            <div className="py-6">

                <div className="flex flex-col lg:flex-row items-start justify-between gap-7 lg:gap-0">

                    {/* left side starts*/}
                    <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-center lg:text-left">
                        <div className="flex flex-col items-center lg:items-start">
                            <h1 className="text-[#bb1c1b] text-3xl font-bold">Eternels</h1>
                            <img className="w-[6vw]" src={logo} alt="" />
                            <p className="text-lg font-medium max-w-sm mt-2 text-gray-500 dark:text-gray-400">We are providing letest blog by the woner in different categories</p>
                        </div>
                    </motion.div>
                    {/* left side ends */}

                    <div className="grid grid-cols-2 lg:grid-cols-4 items-start flex-1">
                        <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                            <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Institute</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Community</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Authurity</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Investors</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Contact</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Our Vision</Link>

                        </motion.div>

                        <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                            <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Historical Blog</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Natrure Blog</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Educational Blog</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Farming Blog</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Technological Blog</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Science Blog</Link>
                        </motion.div>

                        <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="mt-6 lg:mt-0">
                            <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Audios</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Books</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Membership</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Documentry</Link>
                            <Link className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Blogs</Link>
                        </motion.div>

                        <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="mt-6 lg:mt-0">
                            <h3 className="text-gray-700 uppercase dark:text-white">Message Us</h3>
                            <div className="mt-3 space-y-2">
                                <div>
                                    <label className="text-gray-600 dark:text-gray-400 font-medium" htmlFor="label"> Drop your Name here</label>
                                    <input className="outline-none border rounded-xl py-1 px-4" placeholder="your name" type="text" name="email" id="" />
                                </div>

                                <div>
                                    <label className="text-gray-600 dark:text-gray-400 font-medium" htmlFor="label"> Drop your email here</label>
                                    <input className="outline-none border rounded-xl py-1 px-4" placeholder="your email" type="email" name="email" id="" />
                                </div>
                                <div>
                                    <input className="bg-[#bb1c1b] text-gray-600 dark:text-gray-400 font-medium py-2 px-3 rounded-xl" type="submit" value="submit" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 mt-6">
                    <motion.button whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}><FiYoutube className="text-white text-3xl"></FiYoutube></motion.button>
                    <motion.button whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}><FaInstagram className="text-white text-[26px]"></FaInstagram></motion.button>
                    <motion.button whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}><FaFacebook className="text-white text-2xl"></FaFacebook></motion.button>
                    <motion.button whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}><FaGithub className="text-white text-2xl"></FaGithub></motion.button>
                </div>

                <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700" />

                <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="flex items-center justify-center gap-3">
                    <FaCopyright className="text-white text-2xl"></FaCopyright>
                    <img className="w-[3vw]" src={logo} alt="" />
                    <p className="flex items-center justify-center gap-3 text-gray-500 dark:text-gray-400"> <span className="text-[#bb1c1b] text-2xl font-bold">Eternels</span> 2020 - All rights reserved</p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;