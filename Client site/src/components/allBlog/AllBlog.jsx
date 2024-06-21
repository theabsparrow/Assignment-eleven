import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const AllBlog = ({ blog }) => {
    const { blogTitle, category, image, shortDescribtion, longDescribtion,_id, name, photo, userEmail} = blog;
    const {user, handleAllWishlistButton} = useAuth();

    const handleWishlist = () => {
        const wishlistBlogTitle = blogTitle;
        const wishlistCategory = category;
        const wishlistImage = image;
        const wishlistShortDescribtion = shortDescribtion;
        const wishlistLongDescribtion = longDescribtion;
        const ownerName = name;
        const ownerPhoto = photo;
        const ownerEmail = userEmail;
        const visitorEmail = user.email;
        const wishlistID = _id;


        const wishlistInfo = { wishlistBlogTitle, wishlistCategory, wishlistImage, wishlistLongDescribtion, wishlistShortDescribtion, ownerName, ownerPhoto, ownerEmail, visitorEmail, wishlistID }
        handleAllWishlistButton(wishlistInfo)
    }
    return (
        <div className='font-roboto flex flex-col lg:flex-row border-[1px] border-gray-600 p-4 rounded-xl shadow-xl gap-8'>
            <div>
                <img className='rounded-xl lg:w-[35vw]' src={image} alt="blog-image" />
            </div>
            <div className='px-8 '>

                <div className='border-b-[2px] border-gray-600 border-dashed pb-5'>
                    <h1 className='text-4xl font-bold'>{blogTitle}</h1>
                    <p className='text-xl font-medium mt-5'>Short Describtion: <span className='text-lg font-normal'>{shortDescribtion}</span></p>
                    <h1 className='text-xl font-medium mt-5'>Category: <span className='text-lg font-normal'>{category}</span></h1>
                </div>
                <div className='mt-16 flex justify-between items-center'>
                    <Link to={`/blog-detail/${_id}`} className='bg-[#bb1c1b] px-3 py-2 rounded-xl text-white hover:bg-black hover:text-white'>Blog detail</Link>
                    <Link  onClick={handleWishlist} className='bg-[#67E7DB] px-3 py-2 rounded-xl hover:bg-[#bb1c1b] hover:text-white'>Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

AllBlog.propTypes = {
    blog: PropTypes.object
}
export default AllBlog;