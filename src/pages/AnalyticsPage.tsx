import { FaCartShopping, FaUsers, FaCoins } from "react-icons/fa6";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import QuickAnalyticsCard from "../components/cards/QuickAnalyticsCard";
import AdvancedAnalyticsCard from "../components/cards/AdvancedAnalyticsCard";
import AreaGraph from "../components/area-graph/AreaGraph";
import PieGraph from "../components/area-graph/PieGraph";
import Tab from "../components/tab-component/Tab";
import { OrdersAnalyticsData, UserDemographicsData } from "../types/prop_types";
import Spinner from "../components/spinner/Spinner";
import { setSnackbarOpen } from "../store/snackbarSlice";
import useAppDispatch from "../hooks/useAppDispatch";

function AnalyticsPage(): JSX.Element {
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();
  let ordersAnalyticsData: OrdersAnalyticsData[] = [];
  let userDemographicsData: UserDemographicsData[] = [];

  const analyticsQuery = useQuery({
    queryKey: ["analytics"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/analytics.json`
      );

      return response.data;
    }
  });

  if (analyticsQuery.data) {
    ordersAnalyticsData = analyticsQuery.data.orders;
    userDemographicsData = analyticsQuery.data.userDemographics;
  }
  if (analyticsQuery.isLoading) {
    return <Spinner />;
  }
  if (analyticsQuery.isError) {
    dispatch(
      setSnackbarOpen({
        isOpen: true,
        message: (analyticsQuery.error as any).message
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
            cardTitle="Orders"
            cardIcon={<FaCartShopping size={18} color="#3a86ff" />}
            analyticValue={3000}
            valueUnit="Items"
            increment={30}
          />
          <QuickAnalyticsCard
            cardTitle="Sales"
            cardIcon={<FaMoneyCheckAlt size={18} color="#8338ec" />}
            analyticValue={100000}
            valueUnit="US Dollars"
            increment={37}
          />
          <QuickAnalyticsCard
            cardTitle="New Users"
            cardIcon={<FaUsers size={18} color="#ff006e" />}
            analyticValue={700}
            decrement={12}
          />
          <QuickAnalyticsCard
            cardTitle="Net Revenue"
            cardIcon={<FaCoins size={18} color="#fb5607" />}
            analyticValue={47000}
            valueUnit="US Dollars"
            increment={36}
          />
        </div>
      </section>

      <section id="advanced-analytics" className="my-10">
        <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-300">
          Advanced Analytics
        </h3>

        <div className="flex flex-col gap-3 tablets:flex-row my-5">
          <AdvancedAnalyticsCard
            cardTitle="Orders this month"
            cardSubtitle="All orders processed this month"
            customStyles={["grow"]}
            AnalyticsComponent={
              <AreaGraph
                graphData={ordersAnalyticsData}
                areaFillColor="#0EA5E9"
                XAxisKey="date"
                YAxisKey="orders"
              />
            }
          />
          <AdvancedAnalyticsCard
            cardTitle="Users Demographic"
            customStyles={[
              "grow-0",
              "desktop:basis-[400px]",
              "h-min",
              "grow-0"
            ]}
            AnalyticsComponent={
              <PieGraph
                graphData={userDemographicsData}
                nameKey="title"
                dataKey="value"
              />
            }
          />
        </div>

        <AdvancedAnalyticsCard
          cardTitle="Month-wise sales"
          cardSubtitle="Detailed sales data since last 3 months"
          AnalyticsComponent={<Tab />}
        />
      </section>
    </div>
  );
}

export default AnalyticsPage;
