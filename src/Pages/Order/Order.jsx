import { useState } from "react";
import Cover from "../../Component/Cover/Cover";
import orderImg from "../../assets/shop/banner2.jpg";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hook/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const {category} = useParams();
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
        <Helmet>
        <title>BISTRO BOSS | Order</title>
      </Helmet>

      <Cover
        img={orderImg}
        title={"OUR SHOP"}
        subtitle={"Would you like to try a dish?"}
      ></Cover>
      <Tabs
        className={"container mx-auto px-3 lg:px-12 my-12"}
        defaultIndex={tabIndex}
        onSelect={(index) => setTabIndex(index)}
      >
        <TabList className={"text-center mb-5"}>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab item={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab item={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
