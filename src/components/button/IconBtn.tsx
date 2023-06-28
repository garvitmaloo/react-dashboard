import { IconButtonProps } from "../../types/prop_types";

function IconBtn({
  btnIcon,
  additionalStyles,
  clickHandler
}: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`rounded bg-theme-cyan cursor-pointer p-1 transition-all duration-200 ${
        additionalStyles && additionalStyles.join(" ")
      }`}
      onClick={() => clickHandler()}
    >
      {btnIcon}
    </button>
  );
}

export default IconBtn;
