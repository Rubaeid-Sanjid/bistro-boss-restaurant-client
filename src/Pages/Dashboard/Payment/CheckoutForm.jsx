import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hook/useAxiosSecure";
import useCart from "../../../Hook/useCart";
import { AuthContext } from "../../../Component/AuthProvider/AuthProvider";

const CheckoutForm = () => {
  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const [transactionId, setTransactionId] = useState("");

  const axiosSecure = useAxiosSecure();
  const [carts] = useCart();
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("Error", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user.displayName || "anonymous",
            email: user.email || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error.");
    } else {
      // console.log('payment intent', paymentIntent);
      if (paymentIntent.status === "succeeded") {
        setTransactionId(paymentIntent.id);

        const paymentInfo = {
          email: user.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(),
          cartIds: carts.map((item) => item._id),
          menuItemIds: carts.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payment", paymentInfo);
        console.log("saved payment", res.data);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      ></CardElement>
      <button
        type="submit"
        className="btn my-2"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-600 my-1">{error}</p>
      {transactionId && (
        <p className="text-green-600 my-1">
          Your transaction ID: {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
