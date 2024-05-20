const MenuItem = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div className="flex gap-4">
      <img src={image} alt="" className="w-[100px]" style={{borderRadius: '0 200px 200px 200px' }}/>
      <div>
        <h2 className="uppercase text-lg font-medium">{name}-----------</h2>
        <h3>{recipe}</h3>
      </div>
      <h3 className="text-lg font-medium text-yellow-500">${price}</h3>
    </div>
  );
};

export default MenuItem;
