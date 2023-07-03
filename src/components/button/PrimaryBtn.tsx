import { PrimaryButtonProps } from "../../types/prop_types";

function PrimaryBtn({
  btnText,
  additionalStyles,
  clickHandler
}: PrimaryButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`rounded px-6 py-3 cursor-pointer bg-theme-cyan shadow-md brightness-100 transition-all duration-200 ${
        additionalStyles ? additionalStyles.join(" ") : ""
      }`}
      onClick={clickHandler}
    >
      {btnText}
    </button>
  );
}

export default PrimaryBtn;
