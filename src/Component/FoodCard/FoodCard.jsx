import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useCart from "../../Hook/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe, _id } = item;
  const {user} = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddCart = ()=>{
    const cartItem = {
      menuId: _id,
      email: user.email,
      name,
      image,
      price
    }
    if(user && user.email){
      axiosSecure.post("/carts", cartItem)
      .then(res=>{
        console.log(res.data);
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added successfully.",
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })
    }
    else{
      // 
    }
  }
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
            <button onClick={()=>handleAddCart(item)} className="btn btn-outline border-0 border-b-2 border-[#BB8506] uppercase">add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
