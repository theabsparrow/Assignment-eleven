import { Link, useNavigate } from 'react-router-dom';
import logo from '../../src/assets/logo.png'
import { useEffect, useState } from 'react';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [error, setError] = useState(null);
    const { setUser, createUser, updateUserProfile, user, loader } = useAuth()
    const navigate = useNavigate();

    useEffect(() => {
        if(user) {
            navigate('/')
        }
    },[navigate, user])

    const handleRegister = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const check = e.target.checkbox.checked;

        setError("")

        if (password.length < 6) {
            setError("your password should be at least 6 character!")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError("your password should be at least one uppercase letter")
            return
        }
        else if (!/[a-z]/.test(password)) {
            setError("your password should be at least one lowercase letter")
            return
        }
        else if(!/[0-9]/.test(password)){
            setError("your password should be at least one numeric character")
            return
        }
        else if (password !== confirmPassword) {
            setError("confirm password dosen't match to password!")
            return
        }
        else if (!check) {
            setError("you must accept our terms and service")
            return
        }
        createUser(email, password)
            .then((result) => {
                setUser(result.user)
                updateUserProfile(name, photo)
                    .then(() => {
                        setUser({...user, photoURL: photo, displayName: name})
                    })
                    navigate("/profile")
                toast.success("you have regestered successfully")
            })
            .catch((error) => {

                toast.error(error.message)
            })
    }

    if(user || loader) {
        return
    }

    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto">
            <Helmet>
                <title>Register || Eternels</title>
            </Helmet>

            <div className="flex justify-center">
                <div className="md:w-[90vw] lg:w-[35vw] p-6 border-[1px] border-[#bb1c1b] shadow-2xl rounded-lg">

                    <div className='flex flex-col items-center'>
                        <h1 className="mt-3 text-2xl font-semibold  capitalize sm:text-3xl ">Register in</h1>
                        <div className='flex items-center'>
                            <h1 className='text-[#bb1c1b] text-3xl font-semibold'>Eternels</h1>
                            <img className='w-[5vw]' src={logo} alt="" />
                        </div>
                    </div>

                    <form onSubmit={handleRegister}>
                        <div className="flex flex-col mt-6">
                            <input type="text" name="name" className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your name" required />
                        </div>
                        <div className="flex flex-col mt-3">
                            <input type="email" name='email' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your email address" required />
                        </div>
                        <div className="flex flex-col mt-3">
                            <input type="text" name='photo' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your photoURL" />
                        </div>

                        <div className="relative flex flex-col mt-3">
                            <input type={showPassword ? "text" : "password"} name='password' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="enter your password" required />
                            <span onClick={() => setShowPassword(!showPassword)} className='text-xl absolute right-2 top-4'>
                                {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                            </span>
                        </div>

                        <div className="relative flex flex-col mt-3">
                            <input type={confirmPassword ? "text" : "password"} name='confirmPassword' className="block  py-3 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="confirm your password" required />
                            <span onClick={() => setConfirmPassword(!confirmPassword)} className='text-xl absolute right-2 top-4'>
                                {confirmPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                            </span>
                        </div>

                        <div className='mt-3 space-x-2 flex items-center'>
                            <input type="checkbox" name="checkbox" id="checkbox" />
                            <label htmlFor="checked" className='text-lg font-medium'>Please accept our <span className='text-[#bb1c1b]'>terms and service</span></label>
                        </div>
                        <div>
                            {
                                error && <span className="text-lg font-medium text-red-700">{error}</span>
                            }
                        </div>
                        <div className='mt-4'>
                            <button className="w-full px-6 py-3 text-lg font-medium text-white bg-[#bb1c1b] rounded-lg hover:bg-black ">
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">

                        <div className="mt-6 text-center ">
                            <h1 className='text-lg font-medium'>Already have an account? <Link to='/Login' className='text-[#bb1c1b] hover:text-black'>Login</Link></h1>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Register;