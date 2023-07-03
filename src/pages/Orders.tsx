import {
  BsFillBagPlusFill,
  BsFillBagDashFill,
  BsFillBagCheckFill
} from "react-icons/bs";
import { createColumnHelper } from "@tanstack/react-table";

import QuickAnalyticsCard from "../components/cards/QuickAnalyticsCard";
import AdvancedTable from "../components/table/AdvancedTable";
import { DUMMY_ORDERS_TABLE_DATA } from "../data/DUMMY_DATA";
import { OrdersTableData } from "../types/prop_types";

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

      <section className="orders-details">
        <AdvancedTable data={DUMMY_ORDERS_TABLE_DATA} columns={columns} />
      </section>
    </div>
  );
}

export default Orders;
