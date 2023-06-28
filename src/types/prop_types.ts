export interface FormSubmitBtnProps {
  btnText: string;
  additionalStyles?: string[];
}

export interface TextFormInputProps {
  inputType: string;
  inputRef: React.Ref<HTMLInputElement>;
  placeholderText: string;
  isRequired: boolean;
  uniqueIdentifier: string;
}

export interface PrimaryButtonProps {
  btnText: string;
  additionalStyles?: string[];
  clickHandler?: () => unknown;
}
