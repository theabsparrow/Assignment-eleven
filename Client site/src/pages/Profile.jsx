import { CgProfile } from "react-icons/cg";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";


const Profile = () => {
    const {user} = useAuth()
    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto">
            <Helmet>
                <title>Profile || Eternels</title>
            </Helmet>
             <div className="border p-5">
                <div className="flex flex-col items-center">
                    <div>
                        {
                            user.photoURL? <img className="w-[50vw] lg:w-[20vw] rounded-full" src={user.photoURL} alt="" />: <CgProfile className="text-4xl"></CgProfile>
                        }
                        
                    </div>
                    <div className="mt-4 text-center">
                        <h1 className="text-4xl font-semibold">{user.displayName? user.displayName : <span> display name not available</span>}</h1>
                        <h1 className="text-2xl font-semibold mt-3">{user.email? user.email : <span> no email available now</span>}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;