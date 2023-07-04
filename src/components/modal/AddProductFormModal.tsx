import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm, SubmitHandler } from "react-hook-form";

import MultipleSelect from "../input/MultipleSelect";
import FormSubmitBtn from "../button/FormSubmitBtn";
import { ModalProps } from "../../types/prop_types";
import { AddProductFormType } from "../../types/hook_types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4
};

export default function BasicModal({ isModalOpen, onClose }: ModalProps) {
  const { handleSubmit, register } = useForm<AddProductFormType>();
  const [open, setOpen] = React.useState(isModalOpen);
  const [selectValue, setSelectValue] = React.useState("");
  const handleClose = () => {
    onClose(false);
    setOpen(false);
  };
  const handleSelectChange = (value: string) => {
    setSelectValue(value);
  };
  const submitAddProductForm: SubmitHandler<AddProductFormType> = (data) => {
    const formData = {
      ...data,
      originalPrice: +data.originalPrice,
      discount: +data.discount,
      category: selectValue
    };
    console.log(formData);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h1 className="text-2xl mb-5 font-semibold">New Product</h1>
          <form onSubmit={handleSubmit(submitAddProductForm)}>
            <input
              className="text-form-input"
              type="text"
              placeholder="Product Title"
              required
              autoComplete="off"
              {...register("productTitle")}
            />
            <input
              className="text-form-input"
              type="number"
              placeholder="Product Price"
              required
              autoComplete="off"
              {...register("originalPrice")}
            />
            <input
              className="text-form-input"
              type="number"
              placeholder="Discount (optional)"
              autoComplete="off"
              {...register("discount")}
            />
            <input
              className="text-form-input"
              style={{ marginBottom: "1rem" }}
              type="text"
              placeholder="Product Image URL"
              autoComplete="off"
              required
              {...register("imageUrl")}
            />
            <MultipleSelect valueChange={handleSelectChange} />
            <FormSubmitBtn
              btnText="Submit"
              additionalStyles={["bg-theme-yellow"]}
            />
          </form>
        </Box>
      </Modal>
    </div>
  );
}