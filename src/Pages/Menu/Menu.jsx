import { Helmet } from "react-helmet-async";
import Cover from "../../Component/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg"
import PopularItems from "../../Component/PopularItems/PopularItems";
// import SectionTitle from "../../Component/SectionTitle/SectionTitle";

const Menu = () => {
  return (
    <div className="">
      <Helmet>
        <title>BISTRO BOSS | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}></Cover>
      <PopularItems></PopularItems>
      <Cover img={menuImg} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}></Cover>
      <PopularItems></PopularItems>
      <Cover img={menuImg} title={'OUR MENU'} subtitle={'Would you like to try a dish?'}></Cover>
      <PopularItems></PopularItems>
      {/* <SectionTitle subtitle={"Don't miss"} title={"TODAY'S OFFER"}></SectionTitle> */}
    </div>
  );
};

export default Menu;
