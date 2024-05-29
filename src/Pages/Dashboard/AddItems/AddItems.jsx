import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data)

    const imgFile = { image: data.image[0] };

    const res = await axiosPublic.post(image_hosting_api, imgFile, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    // console.log(res.data)
    // console.log(res.data.data.display_url)
    if (res.data.success) {
      const menuInfo = {
        name: data.name,
        recipe: data.recipe,
        image: res.data.data.display_url,
        category: data.category,
        price: data.price,
      };

      const menuRes = await axiosSecure.post('/menu', menuInfo)
      // console.log(menuRes.data)
      if(menuRes.data.insertedId){
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data.name} added successfully.`,
          showConfirmButton: false,
          timer: 1500
        });
      }
    }
  };

  return (
    <div>
      <SectionTitle
        title={"ADD AN ITEM"}
        subtitle={"What's new?"}
      ></SectionTitle>
      <div className="m-12 p-10 bg-base-300">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
              {...register("name", { required: true })}
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                className="select select-bordered w-full"
              >
                <option disabled selected>
                  Select a category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Price*</span>
              </label>
              <input
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
                {...register("price", { required: true })}
              />
            </div>
          </div>

          <div>
            <label className="label">
              <span className="label-text font-semibold">Recipe Details*</span>
            </label>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered w-full"
              placeholder="Recipe Details"
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full"
            />
          </div>

          <button className="btn bg- bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Add Item <FaUtensils className="ml-1"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
