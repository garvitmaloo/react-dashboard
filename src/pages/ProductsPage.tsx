import { useState } from "react";
import { useSelector } from "react-redux";

import PrimaryBtn from "../components/button/PrimaryBtn";
import ProductsCard from "../components/cards/ProductsCard";
import MultipleSelect from "../components/input/MultipleSelect";
import { DUMMY_PRODUCTS_DATA } from "../data/DUMMY_DATA";
import BasicModal from "../components/modal/AddProductFormModal";

export default function AllProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const loggedInUser = useSelector((state: any) => state.user);

  const modalCloseHandler = (value: boolean) => {
    setIsModalOpen(value);
  };

  return (
    <div>
      <div className="flex flex-col tablets:flex-row justify-between items-center gap-2">
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          Showing all products
        </h3>
        <div className="flex flex-col tablets:flex-row gap-2 items-end">
          <MultipleSelect width={200} />
          {loggedInUser.role === "Admin" && (
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
        {DUMMY_PRODUCTS_DATA.map((product) => (
          <ProductsCard key={product.productId} productDetails={product} />
        ))}
      </section>

      {isModalOpen && (
        <BasicModal isModalOpen={isModalOpen} onClose={modalCloseHandler} />
      )}
    </div>
  );
}
