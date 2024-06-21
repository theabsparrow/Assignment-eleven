
import { Helmet } from "react-helmet";
import Banner from "../components/banner/Banner";
import BlogCards from "../components/blogCards/BlogCards";
import ClientFeedBack from "../components/clientFeedBack/ClientFeedBack";
import Faq from "../components/faq/Faq";
import Newsletter from "../components/newsletter/Newsletter";



const Home = () => {

    return (
        <div className="min-h-[calc(100vh-466px)]">
            <Helmet>
                <title>Home || Eternels</title>
            </Helmet>
            <Banner></Banner>
            <BlogCards></BlogCards>
            <Newsletter></Newsletter>
            <ClientFeedBack></ClientFeedBack>
            <Faq></Faq>
        </div>
    );
};

export default Home;