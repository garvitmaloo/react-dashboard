import PrimaryBtn from "../components/button/PrimaryBtn";
import ProductsCard from "../components/cards/ProductsCard";
import MultipleSelect from "../components/input/MultipleSelect";
import { DUMMY_PRODUCTS_DATA } from "../data/DUMMY_DATA";

export default function AllProductsPage() {
  return (
    <div>
      <div className="flex flex-col tablets:flex-row justify-between items-center gap-2">
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          Showing all products
        </h3>
        <div className="flex flex-col tablets:flex-row gap-2 items-end">
          <MultipleSelect />
          <PrimaryBtn
            btnText="Add New Product"
            clickHandler={() => console.log("Clicked")}
            additionalStyles={[
              "self-stretch",
              "mt-2",
              "bg-theme-yellow",
              "text-gray-950"
            ]}
          />
        </div>
      </div>

      <section className="flex gap-12 justify-evenly my-6 flex-wrap">
        {DUMMY_PRODUCTS_DATA.map((product) => (
          <ProductsCard key={product.productId} productDetails={product} />
        ))}
      </section>
    </div>
  );
}
