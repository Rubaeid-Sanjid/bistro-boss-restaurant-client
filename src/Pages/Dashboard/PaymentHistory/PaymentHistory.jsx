import { useContext } from "react";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);

  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payment/${user.email}`);
      return res.data;
    },
  });

  return (
    <div className="container mx-auto px-3 lg:px-12">
      <h2 className="text-3xl lg:text-4xl font-semibold text-center my-2">
        Payment History
      </h2>
      <h2 className="text-3xl lg:text-4xl font-semibold text-center my-2">
        Total Payment: {payments.length}
      </h2>
      <div className="mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>PRICE</th>
              <th>TRANSACTION ID</th>
              <th>DATE</th>
              <th>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, idx) => (
              <tr key={payment._id}>
                <th>{idx + 1}</th>
                <td>{payment.price}</td>
                <td>{payment.transactionId}</td>
                <td>
                  {`${payment.date.split("T")[0]} ${
                    payment.date.split("T")[1].split("Z")[0]
                  }`}
                </td>
                <td>{payment.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
