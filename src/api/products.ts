import axios from "axios";
import { ProductDetailsDTO } from "../types/prop_types";

const getAllProducts = async (): Promise<ProductDetailsDTO> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_DATA_URL}/products.json`
  );
  return response.data;
};

export default getAllProducts;
