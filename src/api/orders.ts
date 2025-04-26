import axios from "axios";
import { OrdersTableData } from "../types/prop_types";

const getAllOrders = async (): Promise<OrdersTableData[]> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_DATA_URL}/orders.json`
  );

  return response.data;
};

export default getAllOrders;
