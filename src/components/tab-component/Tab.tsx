import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import AreaGraph from "../area-graph/AreaGraph";
// import { DUMMY_SALES_DATA } from "../../data/DUMMY_DATA";
import { SalesAnalyticsData } from "../../types/prop_types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

export default function BasicTabs() {
  let salesData: SalesAnalyticsData | null = null;
  const [value, setValue] = React.useState(0);
  const salesDataQuery = useQuery({
    queryKey: ["Sales"],
    queryFn: async () => {
      const response = await axios.get(
        `${process.env.REACT_APP_FIREBASE_DATA_URL}/analytics.json`
      );
      return response.data;
    }
  });

  if (salesDataQuery.data) {
    salesData = salesDataQuery.data.sales;
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider", overflow: "auto" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ overflow: "auto" }}
        >
          <Tab
            className="dark:text-gray-50"
            label="January"
            {...a11yProps(0)}
          />
          <Tab
            className="dark:text-gray-50"
            label="February"
            {...a11yProps(1)}
          />
          <Tab className="dark:text-gray-50" label="March" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {salesData && (
          <AreaGraph
            graphData={salesData!.january}
            areaFillColor="#0EA5E9"
            XAxisKey="date"
            YAxisKey="sales"
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {salesData && (
          <AreaGraph
            graphData={salesData!.february}
            areaFillColor="#0EA5E9"
            XAxisKey="date"
            YAxisKey="sales"
          />
        )}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {salesData && (
          <AreaGraph
            graphData={salesData!.march}
            areaFillColor="#0EA5E9"
            XAxisKey="date"
            YAxisKey="sales"
          />
        )}
      </TabPanel>
    </Box>
  );
}
