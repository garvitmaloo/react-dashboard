import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm, SubmitHandler } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import MultipleSelect from "../input/MultipleSelect";
import FormSubmitBtn from "../button/FormSubmitBtn";
import { ModalProps } from "../../types/prop_types";
import { AddProductFormType } from "../../types/hook_types";
import { setSnackbarOpen } from "../../store/snackbarSlice";

type Select = "Clothing" | "Footwear" | "Accessories" | "Gadgets" | "Utilities";

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

export default function BasicModal({
  isModalOpen,
  onClose,
  productFormData
}: ModalProps) {
  const params = useParams();
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { handleSubmit, register, formState, setError, clearErrors } =
    useForm<AddProductFormType>({
      defaultValues: {
        productTitle: productFormData?.productTitle || undefined,
        originalPrice: productFormData?.originalPrice || undefined,
        imageUrl: productFormData?.imageUrl || undefined,
        discount: productFormData?.discount || undefined
      }
    });
  const [open, setOpen] = React.useState(isModalOpen);
  const [selectValue, setSelectValue] = React.useState<Select | null>(null);
  const newProductMutation = useMutation({
    mutationFn: (data: AddProductFormType) => {
      if (!params.id) {
        return axios.post(
          `${process.env.REACT_APP_FIREBASE_DATA_URL}/products.json`,
          data
        );
      }

      return axios.put(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/products/${params.id}.json`,
        data
      );
    },
    onSuccess() {
      queryClient.invalidateQueries(["Products"]);
      if (!params.id) {
        dispatch(
          setSnackbarOpen({
            isOpen: true,
            message: "Product added successfully"
          })
        );
      } else {
        dispatch(
          setSnackbarOpen({
            isOpen: true,
            message: "Product updated successfully"
          })
        );
      }
      onClose(false);
    }
  });

  if (newProductMutation.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (newProductMutation.error as any).message
      })
    );
  }

  const handleClose = () => {
    onClose(false);
    setOpen(false);
  };
  const handleSelectChange = (value: Select) => {
    setSelectValue(value);
    clearErrors("category");
  };
  const submitAddProductForm: SubmitHandler<AddProductFormType> = (data) => {
    const formData = {
      ...data,
      originalPrice: +data.originalPrice,
      discount: data.discount && +data.discount,
      category: selectValue
    };
    if (!formData.category) {
      setError("category", { message: "Please select an option" });
      return;
    }
    newProductMutation.mutate(formData as AddProductFormType);
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
            {formState.errors.category && (
              <p className="form-input-error">
                {formState.errors.category.message}
              </p>
            )}
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
