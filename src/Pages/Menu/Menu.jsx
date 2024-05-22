import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Cover/Cover";

import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../Hook/useMenu";
import MenuCategory from "../../Component/MenuCategory/MenuCategory";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
// import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  // const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div className="">
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      <Cover
        img={menuImg}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>

      <SectionTitle
        title={"TODAY'S OFFER"}
        subtitle={"Don't miss"}
      ></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      <MenuCategory items={desserts} coverImg={dessertImg} coverTitle={'dessert'} coverSubtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

      <MenuCategory items={pizza} coverImg={pizzaImg} coverTitle={'pizza'} coverSubtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

      <MenuCategory items={salad} coverImg={saladImg} coverTitle={'salad'} coverSubtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>

      <MenuCategory items={soup} coverImg={soupImg} coverTitle={'soup'} coverSubtitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></MenuCategory>
    </div>
  );
};

export default Menu;
