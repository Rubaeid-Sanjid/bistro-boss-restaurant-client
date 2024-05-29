import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hook/useAxiosPublic";
import useAxiosSecure from "../../../Hook/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, image, price, _id } = useLoaderData();
  const { register, handleSubmit } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    let imgURL = image;

    if (data.image && data.image[0]) {
      const imgFile = new FormData();
      imgFile.append("image", data.image[0]);

      const res = await axiosPublic.post(image_hosting_api, imgFile, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        imgURL = res.data.data.display_url;
      }
    }

    const menuInfo = {
      name: data.name,
      recipe: data.recipe,
      category: data.category,
      price: data.price,
      image: imgURL,
    };

    const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuInfo);

    if (menuRes.data.modifiedCount > 0) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} updated successfully.`,
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Failed to update item.",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div>
      <h2 className="text-3xl lg:text-4xl text-center my-8">UPDATE ITEM</h2>
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
              defaultValue={name}
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                {...register("category", { required: true })}
                defaultValue={category}
                className="select select-bordered w-full"
              >
                <option disabled>Select a category</option>
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
                defaultValue={price}
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
              defaultValue={recipe}
            ></textarea>
          </div>

          <div className="form-control w-full">
            <input
              {...register("image")}
              type="file"
              className="file-input w-full"
            />
          </div>

          <button className="btn bg-gradient-to-r from-[#835D23] to-[#B58130] text-white">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
