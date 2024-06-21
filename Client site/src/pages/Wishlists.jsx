
import useAuth from "../hooks/useAuth";
import WishlistBlog from "../components/wishlistBlog/WishlistBlog";
import { Link } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@chakra-ui/react";
const Wishlists = () => {
    // const [wishlistBlogs, setWishlistBlogs] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const {data: wishlistBlogs = []  , isLoading, refetch, isError, error} = useQuery({
            queryFn: () => getData() ,
            queryKey: ["wishlists", user?.email],
    })

    // useEffect(() => {
    //     getData()
    // }, [user])

    const getData = async () => {
       const {data} = await axiosSecure(`/wishlists/${user.email}`)
          return data

    }

   if (isLoading) return <div className="flex justify-center mt-4 mb-4 min-h-[calc(100vh-466px)]">
   <Spinner
       thickness='4px'
       speed='0.65s'
       emptyColor='gray.200'
       color='blue.500'
       size='xl'
   />
</div>

    return (
        <div className="min-h-[calc(100vh-466px)] px-4 lg:px-[70px] mt-4 mb-4 font-roboto space-y-5">
            <div className="flex items-center">
                <h1 className="text-xl font-semibold bg-[#bb1c1bCC] text-white py-2 px-3 rounded-xl">Wishlist: <span>{wishlistBlogs.length}</span></h1>
            </div>
            {
                wishlistBlogs.length > 0 ? <div className="space-y-5">
                    {
                        wishlistBlogs.map(wishlistBlog => <WishlistBlog key={wishlistBlog._id} refetch={refetch} wishlistBlog={wishlistBlog}></WishlistBlog>)
                    }
                </div>: <div className="flex flex-col items-center">
                    <h1 className="text-3xl font-bold">Empty Wishlist</h1>
                    <h1 className="text-2xl font-semibold mt-4">To Add Wishlist, go to</h1>
                    <Link className="text-white px-3 py-2 text-lg rounded-xl bg-[#bb1c1b] mt-5 hover:bg-black" to="/allBlogs">All Blogs</Link>
                </div>
            }


        </div>
    );
};

export default Wishlists;