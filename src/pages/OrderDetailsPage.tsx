import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

import PrimaryBtn from "../components/button/PrimaryBtn";
import { OrdersTableData } from "../types/prop_types";
import { setSnackbarOpen } from "../store/snackbarSlice";
import Spinner from "../components/spinner/Spinner";
import useAppDispatch from "../hooks/useAppDispatch";

export default function OrderDetails(): JSX.Element {
  let orderDetails: OrdersTableData | null = null;

  const queryClient = useQueryClient();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const orderDetailsQuery = useQuery({
    queryKey: ["OrderDetails"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/orders/${
          +params.id! - 1
        }.json`
      );
      return response.data;
    }
  });
  const updateOrderStatusMutation = useMutation({
    mutationFn: async () => {
      const response = await axios.put(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/orders/${
          +params.id! - 1
        }.json`,
        { ...orderDetails, orderStatus: "Fulfilled" }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["OrderDetails"]);
      dispatch(
        setSnackbarOpen({
          isOpen: true,
          message: "Order status updated successfully"
        })
      );
      navigate("/orders");
    }
  });
  const orderFulfillHandler = () => {
    updateOrderStatusMutation.mutate();
  };

  if (orderDetailsQuery.data) {
    orderDetails = orderDetailsQuery.data;
  }
  if (orderDetailsQuery.isLoading) {
    return <Spinner />;
  }
  if (orderDetailsQuery.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (orderDetailsQuery.error as any).message
      })
    );
  }

  return (
    <div>
      <p> Order Details for Order Id = {params.id}</p>
      {orderDetails && orderDetails.orderStatus.toLowerCase() === "pending" && (
        <PrimaryBtn
          btnText="Mark as Fulfilled"
          additionalStyles={["bg-theme-yellow", "block", "mx-auto", "my-5"]}
          clickHandler={orderFulfillHandler}
        />
      )}
    </div>
  );
}
