export interface FormSubmitBtnProps {
  btnText: string;
  additionalStyles?: string[];
}

export interface PrimaryButtonProps {
  btnText: string;
  additionalStyles?: string[];
  clickHandler?: () => unknown;
}

export interface IconButtonProps {
  btnIcon: React.ReactElement;
  additionalStyles?: string[];
  clickHandler: () => unknown;
}
