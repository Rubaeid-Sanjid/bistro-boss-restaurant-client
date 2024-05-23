const FoodCard = ({ item }) => {
  const { image, name, price, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="food" />
        </figure>
        <div className="card-body items-center">
          <h3 className="py-1 px-3 bg-slate-900 text-white absolute right-5 top-5">
            $ {price}
          </h3>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline border-0 border-b-2 border-[#BB8506] uppercase">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
