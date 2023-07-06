/* eslint-disable import/no-extraneous-dependencies */
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import FormSubmitBtn from "../components/button/FormSubmitBtn";
import { LoginFormTypes } from "../types/hook_types";

function LoginPage(): JSX.Element {
  const [loginError, setLoginError] = useState<string | null>(null);
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginFormTypes>();

  const submitLoginForm: SubmitHandler<LoginFormTypes> = async (data) => {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_FIREBASE_API_KEY}`,
        { email: data.email, password: data.password, returnSecureToken: true }
      );

      if (response.data) {
        localStorage.setItem("loggedInUserData", JSON.stringify(response.data));

        navigate("/");
        window.location.reload(); // this is needed to refresh the app and reload the app.tsx component for routes to work
        setLoginError(null);
      } else {
        setLoginError("Login Failed. Unable to fetch user data");
      }
    } catch (err: any) {
      setLoginError(`Login Failed. Error - ${err.response.data.error.message}`);
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
        {loginError && <p className="form-input-error">{loginError}</p>}
        <FormSubmitBtn btnText="Submit" />
      </form>
    </div>
  );
}

export default LoginPage;
