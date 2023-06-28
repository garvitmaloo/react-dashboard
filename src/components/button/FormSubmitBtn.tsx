import { FormSubmitBtnProps } from "../../types/prop_types";

function FormSubmitBtn({
  btnText,
  additionalStyles
}: FormSubmitBtnProps): JSX.Element {
  return (
    <button
      type="submit"
      className={`rounded px-6 mt-5 py-3 cursor-pointer block mx-auto hover:brightness-[110%] bg-theme-cyan shadow-md brightness-100 transition-all duration-200 ${
        additionalStyles ? additionalStyles.join(" ") : ""
      }`}
    >
      {btnText}
    </button>
  );
}

export default FormSubmitBtn;
