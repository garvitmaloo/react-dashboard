import { IconButtonProps } from "../../types/prop_types";

function IconBtn({
  btnIcon,
  additionalStyles,
  clickHandler,
  ...rest
}: IconButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`rounded bg-theme-cyan cursor-pointer p-1 transition-all duration-200 disabled:cursor-not-allowed ${
        additionalStyles && additionalStyles.join(" ")
      }`}
      onClick={() => clickHandler()}
      {...rest}
    >
      {btnIcon}
    </button>
  );
}

export default IconBtn;
