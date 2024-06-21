import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import { FcGoogle } from "react-icons/fc";
import { useEffect, useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { setUser, userLogin,loginWithGoogle, user, loader } = useAuth()
    const navigateHome = useNavigate();
    const location = useLocation()

    useEffect( () => {
        if(user){
            navigateHome('/')
        }
    },[navigateHome,user])

    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        userLogin(email, password)
            .then((result) => {
                setUser(result.user)            
                toast.success("login successfully")
                navigateHome(location?.state? location.state: '/')
               

            })
            .catch((error) => {
                console.log((error.message))
                toast.error("invalid email or password, try again")
            })
    }


    // google login
    const googleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                setUser(result.user)
                toast.success("Successfully login with google")
                navigateHome(location?.state? location.state: '/')
            })
            .catch((error) => {
                console.log(error.message)
                toast.error("faild to login with google, try again")
            })
    }

    // if(user || loader) {
    //     return
    // }

    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto">

            <Helmet>
                <title>Login || Eternels</title>
            </Helmet>

            <div className="flex justify-center">
                <div className="md:w-[90vw] lg:w-[35vw] p-6 border-[1px] border-[#bb1c1b] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className="mt-3 text-2xl font-semibold  capitalize sm:text-3xl ">sign In to</h1>
                        <div className='flex items-center'>
                            <h1 className='text-[#bb1c1b] text-3xl font-semibold'>Eternels</h1>
                            <img className='w-[5vw]' src={logo} alt="" />
                        </div>
                    </div>

                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col mt-6">
                            <label className='text-xl font-medium'>Email:</label>
                            <input type="email" name='email' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your email address" required />
                        </div>
                        <div className="relative flex flex-col mt-6">
                            <label className='text-xl font-medium'>Password:</label>
                            <input type={showPassword ? "text" : "password"} name='password' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your email address" required />
                            <span onClick={() => setShowPassword(!showPassword)} className='text-xl absolute right-2 top-11'>
                                {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                            </span>
                        </div>
                        <div className='mt-3 space-x-2 flex items-center'>
                            <label htmlFor="checked" className='text-lg font-medium'>Remember</label>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                        </div>
                        <div className='mt-4'>
                            <button className="w-full px-6 py-3 text-lg font-medium text-white bg-[#bb1c1b] rounded-lg hover:bg-black ">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <p className="mt-4 text-center text-lg font-medium">or sign in with</p>
                        <button onClick={googleLogin} className='flex items-center justify-center mt-2 gap-10 text-lg font-medium border-[#bb1c1b] shadow-xl border-[1px] w-full px-6 py-3 rounded-xl hover:bg-black hover:text-white'>
                            <FcGoogle className='text-xl'></FcGoogle> Sign in with Google
                        </button>

                        <div className="mt-6 text-center ">
                            <h1 className='text-lg font-medium'>Don’t have an account yet? <Link to='/register' className='text-[#bb1c1b] hover:text-black'>Register</Link></h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;