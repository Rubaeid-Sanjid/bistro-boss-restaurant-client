import { FaRegPenToSquare } from "react-icons/fa6";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../Hook/useMenu";
import { FaTrashAlt } from "react-icons/fa";

const ManageItems = () => {
  const [menu] = useMenu();
  return (
    <div>
      <SectionTitle
        title={"MANAGE ALL ITEMS"}
        subtitle={"Hurry Up!"}
      ></SectionTitle>
      <div className="overflow-x-auto p-10">
        <h2 className="text-3xl font-semibold uppercase mb-5">
          Total Items: {menu.length}
        </h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>$ {item.price}</td>
                <th>
                  <button
                    // onClick={() => handleMakeAdmin(item._id)}
                    className="btn text-xl bg-[#D1A054] text-white"
                  >
                    <FaRegPenToSquare></FaRegPenToSquare>
                  </button>
                </th>
                <th>
                <button
                    // onClick={() => handleDelete(user._id)}
                    className="btn btn-ghost btn-lg text-red-600"
                  >
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
