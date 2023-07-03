import { OrdersTableData, ProductsDetails } from "../types/prop_types";

export const DUMMY_AREA_GRAPH_DATA: { date: string; orders: number }[] = [
  { date: "Jan 1", orders: 300 },
  { date: "Jan 2", orders: 250 },
  { date: "Jan 3", orders: 100 },
  { date: "Jan 4", orders: 180 },
  { date: "Jan 5", orders: 275 },
  { date: "Jan 6", orders: 210 },
  { date: "Jan 7", orders: 310 },
  { date: "Jan 8", orders: 285 },
  { date: "Jan 9", orders: 250 },
  { date: "Jan 10", orders: 200 }
];

export const DUMMY_CIRCULAR_GRAPH_DATA: any[] = [
  { title: "Male", value: 1200 },
  { title: "Female", value: 1400 },
  { title: "Unspecified", value: 500 }
];

export const CIRCULAR_GRAPH_COLORS = ["#0088FE", "#00C49F", "#ff70a6"];

export const DUMMY_SALES_DATA: any = {
  january: [
    { date: "Jan 1", sales: 3000 },
    { date: "Jan 2", sales: 2800 },
    { date: "Jan 3", sales: 1900 },
    { date: "Jan 4", sales: 2100 },
    { date: "Jan 5", sales: 2750 },
    { date: "Jan 6", sales: 2100 },
    { date: "Jan 7", sales: 3500 },
    { date: "Jan 8", sales: 2850 },
    { date: "Jan 9", sales: 2500 },
    { date: "Jan 10", sales: 2700 },
    { date: "Jan 11", sales: 2200 },
    { date: "Jan 12", sales: 2400 },
    { date: "Jan 13", sales: 2000 },
    { date: "Jan 14", sales: 3000 },
    { date: "Jan 15", sales: 2900 }
  ],
  february: [
    { date: "Feb 1", sales: 3200 },
    { date: "Feb 2", sales: 2900 },
    { date: "Feb 3", sales: 1700 },
    { date: "Feb 4", sales: 2700 },
    { date: "Feb 5", sales: 2250 },
    { date: "Feb 6", sales: 2400 },
    { date: "Feb 7", sales: 3000 },
    { date: "Feb 8", sales: 3250 },
    { date: "Feb 9", sales: 2500 },
    { date: "Feb 10", sales: 2700 },
    { date: "Feb 11", sales: 2900 },
    { date: "Feb 12", sales: 2500 },
    { date: "Feb 13", sales: 2000 },
    { date: "Feb 14", sales: 2800 },
    { date: "Feb 15", sales: 3000 }
  ],
  march: [
    { date: "Mar 1", sales: 3000 },
    { date: "Mar 2", sales: 2800 },
    { date: "Mar 3", sales: 1900 },
    { date: "Mar 4", sales: 2100 },
    { date: "Mar 5", sales: 2750 },
    { date: "Mar 6", sales: 2100 },
    { date: "Mar 7", sales: 3500 },
    { date: "Mar 8", sales: 2850 },
    { date: "Mar 9", sales: 2500 },
    { date: "Mar 10", sales: 2700 },
    { date: "Mar 11", sales: 2200 },
    { date: "Mar 12", sales: 2400 },
    { date: "Mar 13", sales: 2000 },
    { date: "Mar 14", sales: 3000 },
    { date: "Mar 15", sales: 2900 }
  ],
  april: [
    { date: "Apr 1", sales: 3200 },
    { date: "Apr 2", sales: 2900 },
    { date: "Apr 3", sales: 1700 },
    { date: "Apr 4", sales: 2700 },
    { date: "Apr 5", sales: 2250 },
    { date: "Apr 6", sales: 2400 },
    { date: "Apr 7", sales: 3000 },
    { date: "Apr 8", sales: 3250 },
    { date: "Apr 9", sales: 2500 },
    { date: "Apr 10", sales: 2700 },
    { date: "Apr 11", sales: 2900 },
    { date: "Apr 12", sales: 2500 },
    { date: "Apr 13", sales: 2000 },
    { date: "Apr 14", sales: 2800 },
    { date: "Apr 15", sales: 3000 }
  ],
  may: [
    { date: "May 1", sales: 3000 },
    { date: "May 2", sales: 2800 },
    { date: "May 3", sales: 1900 },
    { date: "May 4", sales: 2100 },
    { date: "May 5", sales: 2750 },
    { date: "May 6", sales: 2100 },
    { date: "May 7", sales: 3500 },
    { date: "May 8", sales: 2850 },
    { date: "May 9", sales: 2500 },
    { date: "May 10", sales: 2700 },
    { date: "May 11", sales: 2200 },
    { date: "May 12", sales: 2400 },
    { date: "May 13", sales: 2000 },
    { date: "May 14", sales: 3000 },
    { date: "May 15", sales: 2900 }
  ],
  june: [
    { date: "Jun 1", sales: 3200 },
    { date: "Jun 2", sales: 2900 },
    { date: "Jun 3", sales: 1700 },
    { date: "Jun 4", sales: 2700 },
    { date: "Jun 5", sales: 2250 },
    { date: "Jun 6", sales: 2400 },
    { date: "Jun 7", sales: 3000 },
    { date: "Jun 8", sales: 3250 },
    { date: "Jun 9", sales: 2500 },
    { date: "Jun 10", sales: 2700 },
    { date: "Jun 11", sales: 2900 },
    { date: "Jun 12", sales: 2500 },
    { date: "Jun 13", sales: 2000 },
    { date: "Jun 14", sales: 2800 },
    { date: "Jun 15", sales: 3000 }
  ]
};

export const DUMMY_ORDERS_TABLE_DATA: OrdersTableData[] = [
  {
    orderId: "1",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "2",
    orderStatus: "pending",
    orderAmount: 1000,
    userDetails: "Some Name",
    deliveryLocation: "Jaipur",
    totalItems: 1
  },
  {
    orderId: "3",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "4",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "5",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "6",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "7",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "8",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "9",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "10",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "11",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "12",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "13",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "14",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "15",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "16",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "17",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "18",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "19",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  },
  {
    orderId: "20",
    orderStatus: "fulfilled",
    orderAmount: 10000,
    userDetails: "Alex Cat",
    deliveryLocation: "Delhi",
    totalItems: 4
  }
];

export const DUMMY_PRODUCTS_DATA: ProductsDetails[] = [
  {
    productId: "1",
    productTitle: "Mens Shirt",
    originalPrice: 1400,
    discount: 15,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0752/6435/products/0E4A5082.jpg?v=1663857189",
    category: "Clothing"
  },
  {
    productId: "2",
    productTitle: "Mens TShirt",
    originalPrice: 700,
    discount: 20,
    imageUrl:
      "https://www.jiomart.com/images/product/original/rvpv7ixpjq/leotude-oversized-cottonblend-half-sleeve-t-shirt-for-men-s-product-images-rvpv7ixpjq-0-202303091538.png?im=Resize=(330,410)",
    category: "Clothing"
  },
  {
    productId: "3",
    productTitle: "Adidas Shoes",
    originalPrice: 3500,
    discount: 25,
    imageUrl:
      "https://imgeng.jagran.com/images/2023/may/Best%20Adidas%20Original%20Shoes%20For%20Men1682951431717.jpg",
    category: "Footwear"
  },
  {
    productId: "4",
    productTitle: "Women's Tracksuit",
    originalPrice: 3800,
    discount: 10,
    imageUrl:
      "https://www.kreedon.com/wp-content/uploads/2022/11/screen_shot_2021-11-11_at_9-26-13_am.webp",
    category: "Clothing"
  },
  {
    productId: "5",
    productTitle: "Mens leather wallet",
    originalPrice: 1400,
    discount: 15,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0009/6544/3650/products/IMG_2080_156c7495-6b51-4bd8-8047-7ca1865570c6_1000x1000.jpg?v=1659546918",
    category: "Accessories"
  },
  {
    productId: "6",
    productTitle: "Wireless Earphones",
    originalPrice: 1400,
    imageUrl: "https://www.batna24.com/img2/1000/330940_1.webp",
    category: "Gadgets"
  },
  {
    productId: "7",
    productTitle: "Women's footwear",
    originalPrice: 1250,
    imageUrl:
      "https://images.jdmagicbox.com/quickquotes/images_main/vkc-pride-womens-footwear-23-09-2020-049-210844611-4occ1.jpg",
    category: "Footwear"
  }
];
