
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useMutation } from '@tanstack/react-query';

const WishlistBlog = ({ wishlistBlog, refetch }) => {
    const { wishlistBlogTitle, wishlistCategory, wishlistImage, wishlistShortDescribtion, _id } = wishlistBlog;
    const axiosSecure = useAxiosSecure();


    const {mutateAsync } = useMutation({
        mutationFn: async(id) => { 
            const {data} = await axiosSecure.delete(`/wishlist/${id}`)
            console.log(data)
        },
       onSuccess: () => {
        toast.success("removed successfullt")
        refetch()
       }
    })

    const handleDelete = (id) => {
        try {
                mutateAsync(id)
        }
        catch (err) {
            console.log(err)
        }
       
    }


    return (
        <div className='font-roboto flex flex-col lg:flex-row border-[1px] border-gray-600 p-4 rounded-xl shadow-xl gap-8'>
            <Helmet>
                    <title>Wishlist || Eternels</title>
            </Helmet>
            <div>
                <img className='rounded-xl lg:w-[35vw]' src={wishlistImage} alt="blog-image" />
            </div>
            <div className='lg:px-8 '>

                <div className='border-b-[2px] border-gray-600 border-dashed pb-5'>
                    <h1 className='text-4xl font-bold'>{wishlistBlogTitle}</h1>
                    <p className='text-xl font-medium mt-5'>Short Describtion: <span className='text-lg font-normal'>{wishlistShortDescribtion}</span></p>
                    <h1 className='text-xl font-medium mt-5'>Category: <span className='text-lg font-normal'>{wishlistCategory}</span></h1>
                </div>
                <div className='mt-16 flex justify-between items-center'>
                    <Link to={`/wishlist-detail/${_id}`} className='bg-[#bb1c1b] px-3 py-2 rounded-xl text-white hover:bg-black hover:text-white'>Blog detail</Link>
                    <button onClick={() => handleDelete(_id)} className='bg-[#67E7DB] px-3 py-2 rounded-xl hover:bg-[#bb1c1b] hover:text-white'>Remove</button>
                </div>
            </div>
        </div>
    );
};

WishlistBlog.propTypes = {
    getData: PropTypes.func,
    refetch: PropTypes.func,

    wishlistBlog: PropTypes.object
}
export default WishlistBlog;