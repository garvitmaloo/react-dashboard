import axios from "axios";
import AnalyticsData from "../types/dto";

const getAllAnalytics = async (): Promise<AnalyticsData> => {
  const response = await axios.get(
    `${process.env.REACT_APP_FIREBASE_DATA_URL}/analytics.json`
  );

  return response.data;
};

export default getAllAnalytics;
