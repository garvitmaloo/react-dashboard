export interface FormSubmitBtnProps {
  btnText: string;
  additionalStyles?: string[];
}

export interface PrimaryButtonProps {
  btnText: string;
  additionalStyles?: string[];
  clickHandler?: () => unknown;
}

export interface IconButtonProps {
  btnIcon: React.ReactElement;
  additionalStyles?: string[];
  clickHandler: () => unknown;
  rest?: any;
}

export interface QuickAnalyticsCardProps {
  cardTitle: string;
  cardIcon: React.ReactElement;
  analyticValue: number;
  valueUnit?: string;
  increment?: number;
  decrement?: number;
}

export interface AdvancedAnalyticsCardProps {
  cardTitle: string;
  cardSubtitle?: string;
  AnalyticsComponent?: React.ReactElement;
  customStyles?: string[];
}

export interface AreaGraphProps {
  graphData?: any[];
  areaFillColor: string;
  XAxisKey: string;
  YAxisKey: string;
  graphHeight?: string | number;
  graphWidth?: string | number;
}

export interface PieGraphProps {
  graphData?: any[];
  graphWidth?: number | string;
  graphHeight?: number | string;
  nameKey: string;
  dataKey: string;
  graphDetails?: React.ReactElement;
}

export interface AdvancedTableProps<T> {
  data: T[];
  columns: any[];
  customTableStyles?: any;
}

export interface OrdersTableData {
  orderId: string;
  orderStatus: "pending" | "fulfilled" | "returned";
  orderAmount: number;
  userDetails: string;
  deliveryLocation: string;
  totalItems: number;
}

export interface ProductsDetails {
  productId: string;
  imageUrl: string;
  discount?: number;
  originalPrice: number;
  productTitle: string;
  category: "Clothing" | "Footwear" | "Accessories" | "Gadgets" | "Utilities";
}

export type ProductCardProps = {
  productDetails: ProductsDetails;
};

export interface ModalProps {
  onClose: (val: boolean) => void;
  isModalOpen: boolean;
  productFormData?: ProductsDetails;
}

export interface OrdersAnalyticsData {
  date: string;
  orders: number;
}

export interface SalesAnalyticsData {
  january: { date: string; sales: number }[];
  february: { date: string; sales: number }[];
  march: { date: string; sales: number }[];
}

export interface UserDemographicsData {
  title: string;
  color: string;
  value: number;
}

export interface User {
  displayName: string;
  expiresIn: string;
  email: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered: boolean;
  role: string;
}
