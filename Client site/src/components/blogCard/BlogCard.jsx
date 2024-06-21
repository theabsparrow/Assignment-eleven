import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const BlogCard = ({ lastSixCard }) => {
    const { blogTitle, category, image, _id, shortDescribtion, longDescribtion, name, photo, userEmail } = lastSixCard;
    const {handleAllWishlistButton, user} = useAuth();

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

        const wishlistInfo = { wishlistBlogTitle, wishlistCategory, wishlistImage, wishlistLongDescribtion, wishlistShortDescribtion, ownerName, ownerPhoto, ownerEmail, visitorEmail,wishlistID }
        handleAllWishlistButton(wishlistInfo)
    }
    return (
        <div style={{ backgroundImage: `url(${image})` }} className='bg-no-repeat bg-center bg-cover lg:h-[20vw] rounded-xl hover:scale-105 duration-500 pt-2 px-5 pb-8'>

            <div className='flex flex-col h-full'>
                <div className='flex-grow'>
                    <div className='flex items-center font-roboto'>
                        <h1 className='bg-[#bb1c1bB9] py-2 px-3 rounded-xl text-white text-lg font-medium'>category: {category}</h1>
                    </div>
                    <div className='flex items-center font-roboto mt-7'>
                        <h1 className='bg-[#ACA5A580] text-3xl text-center font-bold py-2 px-3 rounded-xl text-black'>{blogTitle}</h1>
                    </div>
                </div>
                <div className='font-roboto flex justify-between mt-6'>
                    <Link to={`/blog-detail/${_id}`} className='bg-[#bb1c1b] px-3 py-2 rounded-xl text-white hover:bg-black hover:text-white'>Blog detail</Link>
                    <Link onClick={handleWishlist} className='bg-[#67E7DB] px-3 py-2 rounded-xl hover:bg-[#bb1c1b] hover:text-white'>Wishlist</Link>
                </div>
            </div>
        </div>
    );
};

BlogCard.propTypes = {
    lastSixCard: PropTypes.object
}
export default BlogCard;