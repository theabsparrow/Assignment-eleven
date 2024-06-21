import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";


const WishlistDetail = () => {
    const detail = useLoaderData()
    const { wishlistBlogTitle, wishlistCategory, wishlistImage, wishlistShortDescribtion,
        wishlistLongDescribtion } = detail;

    return (
        <div className="px-4 lg:px-[70px] font-roboto min-h-[calc(100vh-466px)] my-10">

            <Helmet>
                <title>{wishlistBlogTitle} || wishlist</title>
            </Helmet>

            <div className="border-[1px] border-gray-500 p-4 rounded-xl">
                <div className="flex flex-col lg:flex-row justify-between">
                    <div>
                        <img className="rounded-xl lg:w-[45vw]" src={wishlistImage} alt="" />
                    </div>
                    <div className="px-5 mt-4">
                        <div className="flex flex-col items-center border-b-[2px] border-dashed border-gray-500 pb-5">
                            <h1 className="text-4xl font-bold">{wishlistBlogTitle}</h1>
                            <h1 className="text-[22px] text-center font-medium mt-5">Short describtion: <span className="font-normal">{wishlistShortDescribtion}</span></h1>
                        </div>
                        <div className="mt-8 border-dashed border-b-[2px] border-gray-500 pb-5">
                            <h1 className="lg:w-[40vw] text-xl font-medium text-center">Long describtion: <span className="text-lg font-normal">{wishlistLongDescribtion}</span></h1>
                        </div>
                        <div className="mt-5 flex items-center">
                            <h1 className="text-xl font-medium px-3 py-2 rounded-xl bg-[#79C0BA33] text-[#3BC5B8]">Category: <span className="text-lg font-normal">{wishlistCategory}</span></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WishlistDetail;