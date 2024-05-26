import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=> {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
  return (
    <div>
      <div className="flex justify-evenly mb-8">
        <h2 className="text-4xl font-semibold">Total users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ROLE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <th>{idx + 1}</th>
                <td>{user.user_name}</td>
                <td>{user.user_email}</td>
                <td>{user.user_email}</td>
                <th>
                  <button
                    onClick={() => handleDelete(user._id)}
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

export default AllUsers;
