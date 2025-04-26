import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

import PrimaryBtn from "../components/button/PrimaryBtn";
import ProductsCard from "../components/cards/ProductsCard";
import MultipleSelect from "../components/input/MultipleSelect";
import { ProductsDetails } from "../types/prop_types";
import { setSnackbarOpen } from "../store/snackbarSlice";
import Spinner from "../components/spinner/Spinner";
import useAppDispatch from "../hooks/useAppDispatch";
import useAppSelector from "../hooks/useAppSelector";
import getAllProducts from "../api/products";

const BasicModal = React.lazy(
  () => import("../components/modal/AddProductFormModal")
);

export default function AllProductsPage() {
  let allProducts: ProductsDetails[] = [];
  let filteredProducts: ProductsDetails[] = [];

  const dispatch = useAppDispatch();
  const [filterValue, setFilterValue] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const loggedInUser = useAppSelector((state) => state.user);

  const productsQuery = useQuery({
    queryKey: ["Products"],
    queryFn: getAllProducts
  });

  const modalCloseHandler = (value: boolean) => {
    setIsModalOpen(value);
  };

  const handleSelectChange = (value: string) => {
    setFilterValue(value);
  };

  if (productsQuery.data) {
    allProducts = Object.entries(productsQuery.data).map((data: any[]) => ({
      ...data[1],
      productId: data[0]
    }));

    if (!filterValue) {
      filteredProducts = allProducts;
    } else {
      filteredProducts = allProducts.filter(
        (product) => product.category === filterValue
      );
    }
  }

  if (productsQuery.isLoading) {
    return <Spinner />;
  }

  if (productsQuery.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (productsQuery.error as any).message
      })
    );
  }

  return (
    <div>
      <div className="flex flex-col tablets:flex-row justify-between items-center gap-2">
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          Showing all products
        </h3>
        <div className="flex flex-col tablets:flex-row gap-2 items-end">
          <MultipleSelect width={200} valueChange={handleSelectChange} />
          {loggedInUser?.role === "Admin" && (
            <PrimaryBtn
              btnText="Add New Product"
              clickHandler={() => setIsModalOpen(true)}
              additionalStyles={[
                "self-stretch",
                "mt-2",
                "bg-theme-yellow",
                "text-gray-950"
              ]}
            />
          )}
        </div>
      </div>

      <section className="flex gap-12 justify-evenly my-6 flex-wrap">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductsCard key={product.productId} productDetails={product} />
          ))
        ) : (
          <h1 className="my-5 text-gray-950 dark:text-gray-50 font-bold text-2xl text-center">
            No products to show in this category.
          </h1>
        )}
      </section>

      {isModalOpen && (
        <BasicModal isModalOpen={isModalOpen} onClose={modalCloseHandler} />
      )}
    </div>
  );
}
