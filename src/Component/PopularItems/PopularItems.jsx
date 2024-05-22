import SectionTitle from "../SectionTitle/SectionTitle";
import MenuItem from "../MenuItem/MenuItem";
import useMenu from "../../Hook/useMenu";

const PopularItems = () => {
  // const [menu, setMenu] = useState([]);
  // useEffect(()=>{
  //   fetch('menu.json')
  //   .then(res=> res.json())
  //   .then(data=> {
  //     const popularItems = data.filter(item => item.category === 'popular');
  //     setMenu(popularItems)
  //   })
  // },[])
  const [menu] = useMenu();
  const popularItems = menu.filter(item => item.category === 'popular')
  return (
    <div className="container mx-auto px-3 lg:px-12 mb-8 lg:mb-12">
      <SectionTitle
        subtitle={"Check it out"}
        title={"FROM OUR MENU"}
      ></SectionTitle>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {
          popularItems.map(item => <MenuItem key={item._id} item={item}></MenuItem>)
        }
      </div>
    </div>
  );
};

export default PopularItems;
