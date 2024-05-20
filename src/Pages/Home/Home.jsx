import Banner from "../../Component/Banner/Banner";
import Category from "../../Component/Category/Category";
import PopularItems from "../../Component/PopularItems/PopularItems";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularItems></PopularItems>
        </div>
    );
};

export default Home;