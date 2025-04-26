interface AnalyticsData {
  orders: { date: string; orders: number }[];
  userDemographics: { title: string; value: number; color: string }[];
  sales: {
    [month: string]: { date: string; sales: number }[];
  };
}

export default AnalyticsData;
