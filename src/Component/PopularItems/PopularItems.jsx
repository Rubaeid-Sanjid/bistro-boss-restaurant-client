import { useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { useState } from "react";
import MenuItem from "../MenuItem/MenuItem";

const PopularItems = () => {
  const [menu, setMenu] = useState([]);
  useEffect(()=>{
    fetch('menu.json')
    .then(res=> res.json())
    .then(data=> {
      const popularItems = data.filter(item => item.category === 'popular');
      setMenu(popularItems)
    })
  },[])
  return (
    <div>
      <SectionTitle
        subtitle={"Check it out"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          menu.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularItems;
