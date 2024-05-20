import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import FeaturedItem from "../../Component/FeaturedItem/FeaturedItem";
import PopularItems from "../../Component/PopularItems/PopularItems";
import Testimonial from "../../Component/Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
            <FeaturedItem></FeaturedItem>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;