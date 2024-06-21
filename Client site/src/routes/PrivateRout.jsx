import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import { Spinner } from "@chakra-ui/react";


const PrivateRout = ({ children }) => {
    const {user, loader} = useAuth()
    const location = useLocation()

    if (loader) {
        return <div className="flex justify-center mt-4 mb-4 min-h-[calc(100vh-466px)]">
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    }

    if (user) {
        return children
    }
   else {
    return <Navigate state = {location.pathname} to='/Login' replace={true}></Navigate>
   }
};

PrivateRout.propTypes = {
    children: PropTypes.node
}
export default PrivateRout;