import SectionTitle from "../SectionTitle/SectionTitle";
import featured from "../../assets/home/featured.jpg";
import './FeaturedItem.css';

const FeaturedItem = () => {
  return (
    <div className="featured-item text-white pt-8 bg-cover">
      <SectionTitle
        subtitle={"Check it out"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 py-8 px-3 lg:px-36 pt-12 pb-20">
        <div>
          <img src={featured} alt="" />
        </div>
        <div className="space-y-1">
          <h3>March 20, 2023</h3>
          <h3>WHERE CAN I GET SOME?</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-ghost">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedItem;
