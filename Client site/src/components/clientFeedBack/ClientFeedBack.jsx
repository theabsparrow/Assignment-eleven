import axios from "axios";
import { useEffect, useState } from "react";
import { motion } from "framer-motion"


const ClientFeedBack = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/client`)
            .then(data => {
                const blogInfo = data.data;
                setClients(blogInfo);
            })
    }, [])

    return (
        <div className="px-4 mb-10 lg:px-[70px] font-roboto">
            <div className="flex flex-col items-center border-b-[2px] border-dashed border-gray-400 pb-5">
                <motion.h1 whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}  className="text-4xl font-bold">Client Feedback</motion.h1>
                <motion.p whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}  className="text-lg text-center mt-5 lg:w-[60vw]">In this section we are providing you a data about our client. here we are showing somwe of our client feedback. how they are satisfied by visitong this site </motion.p>
            </div>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center space-x-4">
                {
                    clients.map(client => <motion.div whileHover={{scale: 1.2, transition: { duration: 1 }, }} whileTap={{ scale: 0.9 }}  className="shadow-xl rounded-xl py-4 mb-6 px-4" key={client._id}>
                        <div className="flex justify-center">
                            <img className="w-[50vw] lg:w-[15vw] rounded-full" src={client.clientImage} alt="client image" />
                        </div>
                        <div className="flex flex-col justify-center items-center mt-3">
                            <h1 className="text-2xl font-medium">{client.clientName}</h1>
                            <p className="text-center">{client.feedback
                            }</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <h1 className="bg-[#bb1c1b33] px-3 py-1 rounded-xl text-[#bb1c1b]">Rating: <span>{client.rating}</span></h1>
                        </div>
                    </motion.div>)
                }
            </div>
        </div>
    );
};

export default ClientFeedBack;