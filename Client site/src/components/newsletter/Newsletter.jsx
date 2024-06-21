import toast from 'react-hot-toast';
import newsletter from '../../assets/Newsletter.png'
import { motion } from "framer-motion"

const Newsletter = () => {

    const handleNewsletter = e => {
        e.preventDefault()
        toast.success("Thank you for subscribing to our newsletter")
        e.target.reset()
    }
    return (
        <div className="mb-10 px-4 lg:px-[70px] font-roboto">
            <div className="flex flex-col items-center border-b-[2px] border-dashed border-gray-400 pb-5">
                <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-4xl font-bold">Newsletter section</motion.h1>
                <motion.p whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className="text-lg text-center mt-5 lg:w-[60vw]">In this section we are providing you a opportunity to subscribe us. put your  name and email in the input field below and then submit it. then we will grab it and think about your subscribtion </motion.p>
            </div>
            <div className="mt-8 border p-5 rounded-xl shadow-xl flex flex-col lg:flex-row justify-center gap-10">
                <div>
                    <img className='lg:w-[35vw] rounded-xl' src={newsletter} alt="" />
                </div>
                <div>
                    <div className='px-5 text-center border-b-[2px] border-dashed border-gray-500 pb-6'>
                        <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='text-4xl font-bold'>Subscribe to our newsletter</motion.h1>
                        <motion.p whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='text-lg font-medium mt-5'>fill the form below to get subscribtion. you just need to put email and name</motion.p>
                    </div>
                    <div className='mt-8'>
                        <form onSubmit={handleNewsletter} className='space-y-4'>
                            <div className='flex flex-col'>
                                <motion.label whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='text-xl font-bold'>Name:  </motion.label>
                                <motion.input whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type="text" name="name" id="name" placeholder='Insert your name' required />
                            </div>
                            <div className='flex flex-col'>
                                <motion.label whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='text-xl font-bold'>Email: </motion.label>
                                <motion.input whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='py-2 border bg-transparent rounded-lg px-5 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40' type="email" name="email" id="email" placeholder='Insert your email' required />
                            </div>
                            <div className='flex flex-col'>
                                <motion.input whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }} className='bg-[#bb1c1b] text-white text-lg font-medium hover:bg-black px-3 py-2 rounded-xl' type="submit" value="submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;