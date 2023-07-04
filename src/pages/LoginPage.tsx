/* eslint-disable import/no-extraneous-dependencies */
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import FormSubmitBtn from "../components/button/FormSubmitBtn";
import { LoginFormTypes } from "../types/hook_types";
import { User, setUser } from "../store/userSlice";

function LoginPage(): JSX.Element {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginFormTypes>();
  const dispatch = useDispatch();

  const submitLoginForm: SubmitHandler<LoginFormTypes> = async (data) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        { email: data.email, password: data.password, returnSecureToken: true }
      );

      if (response.data) {
        const loggedInData: User = {
          ...response.data,
          role: data.email === "admin@shop.com" ? "Admin" : "Subadmin"
        };
        localStorage.setItem("loggedInUserData", JSON.stringify(loggedInData));
        dispatch(setUser(loggedInData));

        navigate("/");
        window.location.reload(); // this is needed to refresh the app and reload the app.tsx component for routes to work
      } else {
        // Handle situation
        console.log("Unable to fetch user data");
      }
    } catch (err: any) {
      // Handle Error
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50">
      <div>
        <h1 className="text-4xl text-center font-bold px-3 pt-10 mb-4">
          Welcome Back!
        </h1>
        <h3 className="text-xl text-center font-bold px-3 mb-5">
          Please login to continue
        </h3>
      </div>
      <form
        onSubmit={handleSubmit(submitLoginForm)}
        className="px-4 my-5 w-full max-w-[500px] block mx-auto"
      >
        <input
          required
          type="email"
          placeholder="Enter email"
          className="text-form-input"
          autoComplete="off"
          {...register("email")}
        />
        <input
          required
          type="password"
          placeholder="Enter password"
          className="text-form-input"
          {...register("password", {
            maxLength: {
              value: 20,
              message: "Password cannot be more than 20 characters long"
            },
            minLength: {
              value: 6,
              message: "Password must have atleast 6 characters"
            },
            validate: {
              containsOneUppercase: (value) =>
                value
                  .trim()
                  .split("")
                  .some((element) => element === element.toUpperCase()) ||
                "Password must have atleast one uppercase character",
              containsOneSpecialCharacter: (value) =>
                value.includes("!") ||
                value.includes("@") ||
                value.includes("#") ||
                value.includes("$") ||
                value.includes("%") ||
                value.includes("&") ||
                "Password must have atleast one special character (!, @, #, $, % or &"
            }
          })}
        />
        {errors.password && (
          <p className="form-input-error">{errors.password.message}</p>
        )}
        <FormSubmitBtn btnText="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;
