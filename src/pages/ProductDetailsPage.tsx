import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSelector } from "react-redux";

import BasicModal from "../components/modal/AddProductFormModal";
import PrimaryBtn from "../components/button/PrimaryBtn";
import { ProductsDetails } from "../types/prop_types";

export default function ProductDetailsPage(): JSX.Element {
  let productDetails = {};
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const productDetailsQuery = useQuery({
    queryKey: ["Details"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/products/${params.id}.json`
      );
      return response.data;
    }
  });
  const userState = useSelector((state: any) => state.user);

  if (productDetailsQuery.data) {
    productDetails = { ...productDetailsQuery.data, productId: params.id };
  }

  const clickHandler = () => {
    setIsModalOpen(true);
  };

  const modalCloseHandler = (value: boolean) => {
    setIsModalOpen(value);
  };
  return (
    <div>
      <p>Product Details for product id = {params.id}</p>
      {userState.role === "Admin" && (
        <PrimaryBtn
          btnText="Edit Product"
          additionalStyles={["block my-4 mx-auto bg-theme-yellow"]}
          clickHandler={clickHandler}
        />
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
