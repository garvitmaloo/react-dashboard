import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import BasicModal from "../components/modal/AddProductFormModal";
import PrimaryBtn from "../components/button/PrimaryBtn";
import { ProductsDetails } from "../types/prop_types";
import { setSnackbarOpen } from "../store/snackbarSlice";

export default function ProductDetailsPage(): JSX.Element {
  let productDetails = {};
  const params = useParams();
  const dispatch = useDispatch();
  const userState = useSelector((state: any) => state.user);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const productDetailsQuery = useQuery({
    queryKey: ["Details"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/products/${params.id}.json`
      );
      return response.data;
    }
  });
  const deleteProductMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.delete(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/products/${params.id}.json`
      );
      return response;
    }
  });

  if (productDetailsQuery.data) {
    productDetails = { ...productDetailsQuery.data, productId: params.id };
  }

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  const deleteHandler = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this product?")) {
      deleteProductMutation.mutate();
    }
  };

  const modalCloseHandler = (value: boolean) => {
    setIsModalOpen(value);
  };

  if (deleteProductMutation.isSuccess) {
    dispatch(
      setSnackbarOpen({ isOpen: true, message: "Product Deleted Successfully" })
    );
    navigate("/products");
  }

  if (deleteProductMutation.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (deleteProductMutation.error as any).message
      })
    );
  }
  return (
    <div>
      <p>Product Details for product id = {params.id}</p>
      {userState.role === "Admin" && (
        <div className="flex justify-center items-center gap-5">
          <PrimaryBtn
            btnText="Edit Product"
            additionalStyles={["my-4 bg-theme-yellow"]}
            clickHandler={clickHandler}
          />
          <PrimaryBtn
            btnText="Delete Product"
            additionalStyles={["block my-4 bg-theme-orange"]}
            clickHandler={deleteHandler}
          />
        </div>
      )}

      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          onClose={modalCloseHandler}
          productFormData={productDetails as ProductsDetails}
        />
      )}
    </div>
  );
}
