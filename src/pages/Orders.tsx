import {
  BsFillBagPlusFill,
  BsFillBagDashFill,
  BsFillBagCheckFill
} from "react-icons/bs";
import { createColumnHelper } from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";

import QuickAnalyticsCard from "../components/cards/QuickAnalyticsCard";
import AdvancedTable from "../components/table/AdvancedTable";
import { OrdersTableData } from "../types/prop_types";
import Spinner from "../components/spinner/Spinner";
import { setSnackbarOpen } from "../store/snackbarSlice";
import useAppDispatch from "../hooks/useAppDispatch";
import getAllOrders from "../api/orders";

const columnHelper = createColumnHelper<OrdersTableData>();
const columns = [
  columnHelper.accessor("orderId", {
    id: "orderId",
    cell: (info) => info.getValue(),
    header: () => <span>Order ID</span>
  }),
  columnHelper.accessor((row) => row.orderAmount, {
    id: "orderAmount",
    cell: (info) => info.getValue(),
    header: () => <span>Order Amount</span>
  }),
  columnHelper.accessor("totalItems", {
    header: () => "Total Items",
    cell: (info) => info.renderValue()
  }),
  columnHelper.accessor("userDetails", {
    header: () => <span>User Details</span>,
    cell: (info) => info.getValue()
  }),
  columnHelper.accessor("deliveryLocation", {
    header: "Delivery Location"
  }),
  columnHelper.accessor("orderStatus", {
    header: "Profile Progress",
    cell: (info) => info.getValue()
  })
];

function Orders(): JSX.Element {
  const dispatch = useAppDispatch();
  const ordersDataQuery = useQuery({
    queryKey: ["Orders"],
    queryFn: getAllOrders
  });

  if (ordersDataQuery.isLoading) {
    return <Spinner />;
  }

  if (ordersDataQuery.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (ordersDataQuery.error as any).message
      })
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-950 dark:text-gray-50">
      <section id="quick-analytics" className="pt-5">
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          Quick Analytics
        </h3>

        <div className="flex flex-col tablets:flex-row gap-5 items-center my-5">
          <QuickAnalyticsCard
            cardTitle="New Orders"
            cardIcon={<BsFillBagPlusFill size={20} color="#2a9d8f" />}
            analyticValue={650}
          />
          <QuickAnalyticsCard
            cardTitle="Pending Orders"
            cardIcon={<BsFillBagDashFill size={20} color="#219ebc" />}
            analyticValue={10}
          />
          <QuickAnalyticsCard
            cardTitle="Fulfilled Orders"
            cardIcon={<BsFillBagCheckFill size={20} color="#3a86ff" />}
            analyticValue={590}
          />
        </div>
      </section>

      {ordersDataQuery.data && (
        <section className="orders-details">
          <AdvancedTable data={ordersDataQuery.data} columns={columns} />
        </section>
      )}
    </div>
  );
}

export default Orders;
