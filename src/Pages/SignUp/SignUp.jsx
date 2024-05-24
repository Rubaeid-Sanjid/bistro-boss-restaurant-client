import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form
            onSubmit={handleSubmit((data) => console.log(data))}
            className="card-body"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                // name="name"
                className="input input-bordered"
                {...register("name", { required: true })}
              />
              {errors.name && <p role="alert" className="text-red-600 mt-1">First name is required</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                // name="email"
                className="input input-bordered"
                {...register("mail", { required: "Email Address is required" })}
        aria-invalid={errors.mail ? "true" : "false"}
              />
              {errors.mail && <p role="alert" className="text-red-600 mt-1">{errors.mail.message}</p>}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                // name="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && <p role="alert" className="text-red-600 mt-1">Password is required</p>}
            </div>

            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign Up</button>
            </div>
            <p className="text-center">
              Already have an account ? <Link to={"/login"}>Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
