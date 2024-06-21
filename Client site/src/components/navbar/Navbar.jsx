import { Link, NavLink, useNavigate } from "react-router-dom"
import logo from '../../../src/assets/logo.png'
import { CgProfile } from "react-icons/cg";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Menu, MenuButton, MenuList, Stack, Switch } from "@chakra-ui/react";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { motion } from "framer-motion"

const Navbar = () => {
    const [theme, setTheme] = useState("light");
    const [display, setDisplay] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem("userTheme", theme)
        const uiTheme = localStorage.getItem("userTheme")
        document.querySelector('html').setAttribute('data-theme', uiTheme)
    }, [theme])

    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme("dark")
        }
        else {
            setTheme("light")
        }
    }

    const handleLogOut = () => {
        logout()
            .then(() => {
                toast.success("log out successfully")
                navigate("/Login")
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="px-4 lg:px-[70px] flex items-center justify-between font-roboto py-2 shadow-xl z-20 sticky top-0 bg-white">

            {/* left side */}
            <div className="hidden lg:flex items-center gap-6">
                <motion.div  whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/">Home</NavLink>
                </motion.div>
                <motion.div  whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/allBlogs">All Blogs</NavLink>
                </motion.div>
                <motion.div  whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/featuredBlogs">Featured Blogs</NavLink>
                </motion.div>

            </div>

            {/* middle side */}
            <motion.div  whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                <Link to='/'>
                    <div className="flex items-center">
                        <div>
                            <img className="w-[12vw] lg:w-[5vw]" src={logo} alt="" />
                        </div>
                        <h1 className="text-[30px] lg:text-[40px] font-bold text-[#bb1c1b]">Eternels</h1>
                    </div>
                </Link>
            </motion.div>

            {/* right side */}
            <div className="hidden lg:flex items-center gap-6">

                <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 ' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/addBlog">Add Blog</NavLink>
                </motion.div>
                <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:text-[#bb1c1b] hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/wishLists">Wishlist</NavLink>
                </motion.div>
                <div>
                    <Menu>

                        <MenuButton>
                            {
                                user ? <img className="rounded-full w-[3vw]" src={user?.photoURL} alt="user-profile-photo" referrerPolicy="no-referrer"/> : <CgProfile className="text-4xl text-[#bb1c1b] "></CgProfile>
                            }
                        </MenuButton>

                        <MenuList>

                            {
                                user ? <div className=" px-4 space-y-2">
                                    <div>
                                        <h1 onClick={handleLogOut} className="text-lg font-medium text-[#bb1c1b] border-b-[2px] border-[#bb1c1b]">{user && user?.displayName}</h1>
                                    </div>
                                    <div>
                                        <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1' : 'hover:border-b-[2px] hover:border-[#bb1c1b] text-lg font-medium text-[#bb1c1b] px-1'} to="/profile">Profile</NavLink>
                                    </div>
                                    <div>
                                        <Link onClick={handleLogOut} className="text-lg font-medium text-[#bb1c1b] hover:border-b-[2px] hover:border-[#bb1c1b]">Log Out</Link>
                                    </div>

                                </div> : <div className=" px-4 space-y-2">
                                    <div>
                                        <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:border-b-[2px] hover:border-[#bb1c1b]'} to="/register">Register</NavLink>
                                    </div>

                                    <div>
                                        <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:border-b-[2px] hover:border-[#bb1c1b]]'} to="/Login">Login</NavLink>
                                    </div>
                                </div>
                            }

                        </MenuList>

                    </Menu>
                </div>

            </div>

            {/* dark theme section */}
            <div>
                <div className="flex items-center gap-1">
                    <CiLight className="text-3xl text-[#bb1c1b]"></CiLight>
                    <Stack align='center' direction='row'>
                        <Switch onChange={handleTheme} size='lg' />
                    </Stack>
                    <MdDarkMode className="text-3xl text-black"></MdDarkMode>
                </div>
            </div>

            {/* for small device */}
            <div className={`${display ? "right-2 " : "hidden"} duration-1000 lg:hidden z-10 absolute top-[65px] space-y-3 flex flex-col items-start shadow-xl rounded-xl p-3 bg-slate-400 `}>
                {
                    user && <div>
                        <h1 onClick={handleLogOut} className="text-lg font-medium text-[#bb1c1b] border-b-[2px] border-[#bb1c1b]">{user && user?.displayName}</h1>
                    </div>
                }
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:text-[#bb1c1b]'} to="/">Home</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:text-[#bb1c1b]'} to="/allBlogs">All Blogs</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b]  border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1 hover:text-[#bb1c1b]'} to="/featuredBlogs">Featured Blogs</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1  hover:text-[#bb1c1b]'} to="/addBlog">Add Blog</NavLink>
                </div>
                <div>
                    <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:text-[#bb1c1b]'} to="/wishLists">Wishlist</NavLink>
                </div>

                {
                    user ? <div className="space-y-3">
                        <div>
                            <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1' : 'hover:border-b-[2px] hover:border-[#bb1c1b] text-lg font-medium text-[#bb1c1b] px-1'} to="/profile">Profile</NavLink>
                        </div>
                        <div>
                            <Link to='/Login' onClick={handleLogOut} className="text-lg font-medium text-[#bb1c1b] hover:border-b-[2px] hover:border-[#bb1c1b]">Log Out</Link>
                        </div>
                    </div> : <div className="space-y-3">
                        <div>
                            <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:text-[#bb1c1b]'} to="/register">Register</NavLink>
                        </div>

                        <div>
                            <NavLink className={({ isActive }) => isActive ? 'text-lg font-medium text-[#bb1c1b] border-b-[2px] border-red-600 px-1 pb-1 hover:text-[#bb1c1b]' : 'text-lg font-medium text-[#bb1c1b] px-1   hover:text-[#bb1c1b]'} to="/Login">Login</NavLink>
                        </div>
                    </div>

                }

            </div>

            {/* hamburger icon*/}
            <div onClick={() => setDisplay(!display)} className='lg:hidden'>
                {
                    display === true ? <RxCross2 className='text-5xl text-[#bb1c1b]'></RxCross2> : <MdOutlineMenu className='text-5xl text-[#bb1c1b]'></MdOutlineMenu>
                }
            </div>

        </div>
    );
};

export default Navbar;