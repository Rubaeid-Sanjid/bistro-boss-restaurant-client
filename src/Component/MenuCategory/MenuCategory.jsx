import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({items, coverImg, coverTitle, coverSubtitle}) => {


  return (
    <div>
       {coverTitle && <Cover img={coverImg} title={coverTitle} subtitle={coverSubtitle}></Cover>}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-20 container mx-auto px-3 lg:px-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
