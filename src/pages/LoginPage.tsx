// import { useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import FormSubmitBtn from "../components/button/FormSubmitBtn";
import { LoginFormTypes } from "../types/hook_types";

function LoginPage(): JSX.Element {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<LoginFormTypes>();

  const submitLoginForm: SubmitHandler<LoginFormTypes> = (data) => {
    console.log(data);
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
          type="text"
          placeholder="Enter username"
          className="text-form-input"
          autoComplete="off"
          {...register("username", {
            pattern: {
              value: /^(?!\.)[^@]*$/,
              message:
                "Username cannot start with '.' and should not contain '@'"
            }
          })}
        />
        {errors.username && (
          <p className="form-input-error">{errors.username.message}</p>
        )}
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
