import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import AreaGraph from "../area-graph/AreaGraph";

import { DUMMY_SALES_DATA } from "../../data/DUMMY_DATA";

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
  const [value, setValue] = React.useState(0);

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
          <Tab label="January" {...a11yProps(0)} />
          <Tab label="February" {...a11yProps(1)} />
          <Tab label="March" {...a11yProps(2)} />
          <Tab label="April" {...a11yProps(3)} />
          <Tab label="May" {...a11yProps(4)} />
          <Tab label="June" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.january}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.february}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.march}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.april}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.may}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AreaGraph
          graphData={DUMMY_SALES_DATA.june}
          areaFillColor="#0EA5E9"
          XAxisKey="date"
          YAxisKey="sales"
        />
      </TabPanel>
    </Box>
  );
}
