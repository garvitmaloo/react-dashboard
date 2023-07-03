import { AiFillTags } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import { ProductCardProps } from "../../types/prop_types";

export default function ProductsCard({ productDetails }: ProductCardProps) {
  const navigate = useNavigate();

  const productPrice = productDetails.discount
    ? Math.round(
        productDetails.originalPrice -
          (productDetails.originalPrice * productDetails.discount) / 100
      )
    : productDetails.originalPrice;

  return (
    <div
      className="rounded shadow-md my-5 grow shrink-0 basis-[300px] cursor-pointer max-w-[400px]"
      onClick={() => navigate(`/products/${productDetails.productId}`)}
    >
      <img
        src={productDetails.imageUrl}
        alt={productDetails.productTitle}
        className="rounded w-full h-[200px] object-cover mb-4"
      />
      <div className="text-[12px] bg-theme-cyan text-white rounded inline-block px-1 m-3 mb-0">
        {productDetails.category}
      </div>
      <h2 className="text-xl m-3 mt-1 font-semibold text-gray-950 dark:text-gray-50">
        {productDetails.productTitle}
      </h2>

      {productDetails.discount && (
        <div className="flex gap-4 m-3">
          <h4 className="text-lg text-gray-500 dark:text-gray-300 line-through">
            INR {productDetails.originalPrice}
          </h4>
          <div className="bg-red-100 rounded flex gap-1 px-1 items-center">
            <AiFillTags size={14} color="red" />
            <p className="font-semibold text-[red] text-sm">
              {productDetails.discount}% off
            </p>
          </div>
        </div>
      )}

      <h2 className="m-3 text-2xl text-gray-950 dark:text-gray-50 font-bold">
        INR {productPrice}
      </h2>
    </div>
  );
}
