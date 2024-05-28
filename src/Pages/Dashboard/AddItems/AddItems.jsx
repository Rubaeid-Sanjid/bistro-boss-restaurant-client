import { useForm } from "react-hook-form";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { FaUtensils } from "react-icons/fa";

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <SectionTitle
        title={"ADD AN ITEM"}
        subtitle={"What's new?"}
      ></SectionTitle>
      <div className="m-12 p-10 bg-base-200">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Recipe name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
              {...register("name", { required: true})}
            />
          </div>

          <div className="flex gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text font-semibold">Category*</span>
              </label>
              <select
                {...register("category", { required: true})}
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
                {...register("price", { required: true})}
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
            <input {...register("image", { required: true})} type="file" className="file-input w-full" />
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
